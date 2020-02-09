import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  defaultUser: User = {
    name: 'isaac',
    uid: '029471'
  };

  constructor() { }

  getUser(): User {
    return this.defaultUser;
  }
}
