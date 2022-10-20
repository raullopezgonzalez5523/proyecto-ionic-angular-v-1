import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from './rick-and-morty-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users = [];

  constructor(private rickAndMortyApiService: RickAndMortyApiService) { }

  ngOnInit() {
    this.rickAndMortyApiService.getUsers().subscribe(data => {
      this.users = data.results;
      // console.log(data.results);
    });
  }

}
