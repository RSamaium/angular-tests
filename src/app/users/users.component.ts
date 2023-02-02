import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../core/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  propName: string = ''
  propEmail: string =''

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users
    })
  }

  createUser() {
    this.userService.addUser({
      name: this.propName,
      email: this.propEmail
    }).subscribe((user: User) => {
      this.users.push(user)
    })
  }
}
