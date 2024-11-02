import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  apiURL: string = 'https://localhost:7059/api/UsersLogin/'

  constructor(private http: HttpClient) { }

  userRegister(NewUser: UserRegister) {
    return this.http.post(this.apiURL + "register", NewUser)
  }

  loginUser(email: string, password: string) {
    return this.http.post(this.apiURL, { email, password });
  }

}
