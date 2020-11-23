import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../users/user.model';
import { UsersuserService } from '../usersuser.service';

@Component({
  selector: 'app-userscreate-user',
  templateUrl: './userscreate-user.component.html',
  styleUrls: ['./userscreate-user.component.css']
})
export class UserscreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate
   
  
  constructor(private userService: UsersuserService) { }

  ngOnInit() {
  }

  save(){
    this.userService.createUser(this.request).subscribe(res =>{
      this.response = res;
    });
  }

}
