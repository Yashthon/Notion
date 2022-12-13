import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;

  users = [];
  dataloading = false;
  pageSize = 10;
  lastPage: any;
  paginationEnabled = false;
  selectedRows: any[] | undefined;
  scrollItems: any[] | undefined;
  showScroll: boolean | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(){
    this.scrollItems = [
      'Herb Costales',
      'Gloria Cherie',
      'Paraskeva Goran',
      'Paskal',
      'Nadia',
      'Lyudmila',
      'Mihaela',
      'Snezhana',
      'Katya',
      'Ekaterina',
      'Milena',
      'Nedyalka',
      'Nadejda',
      'Hristina',
      'Denica',
      'Gabriela',
      'Kuzman',
      'Roza',
      'Genko',
      'Lyubomir',
      'Tereza',
      'Eva',
      'Zara',
      'Mila',
      'Veronika',
      'Blaga',
      'Ilarion',
      'Sofia',
      'Ignat',
    ];
  }

}
