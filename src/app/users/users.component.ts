import { Component, OnInit } from '@angular/core';
import { UsersuserService } from '../usersuser.service';
import { ResponseUsers } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers;
  constructor(private userService: UsersuserService) { }

  ngOnInit(){
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

}
