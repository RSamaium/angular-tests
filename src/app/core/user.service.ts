import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
  name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []
  readonly url: string = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
     return this.http.get<User[]>(this.url)
  }

  addUser(user: User) {
    if (!user.name || !user.email) {
      throw new Error('Erreur')
    }
    this.users.push(user)
  }
}
