import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  user$ = this.usersService.currentUserProfile$;

  dataSource : any;
  id : any;
  name : any;
  personalInfo : any;
  editObj : any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;


  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    public usersService : UsersService){}
    
  logout(){
     this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
     });
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
  }


}
