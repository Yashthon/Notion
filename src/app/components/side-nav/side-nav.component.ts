import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {



  constructor(
    private authService: AuthenticationService, 
    private router: Router,
  ) { }

  logout(){
    this.authService.logout().subscribe(() => {
     this.router.navigate(['/']);
    });
 }


  ngOnInit(): void {
  }

}
