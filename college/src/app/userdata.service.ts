import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  users:User[]=[];

  constructor() {

    this.users.push({
      name: 'Samarth',
      address: 'Solapur',
      email: 'gmail@samarth.com'
    });

    this.users.push({
      name: 'Abhishek',
      address: 'Solapur',
      email: 'hotmail@abhishek.com'
    });

    this.users.push({
      name: 'Rohan',
      address: 'Mumbai',
      email: 'yahoo@rohan.com'
    });



  }
}
