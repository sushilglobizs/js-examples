import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // fetch and return the list of users as observable
  getUsers() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.org/users');
  }
}
