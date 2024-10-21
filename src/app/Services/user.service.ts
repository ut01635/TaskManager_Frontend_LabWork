import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'https://localhost:7059/api/Users'

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.apiURL)
  }

  addUser(user : any){
    return this.http.post(this.apiURL, user)
  }

  deleteUser(id :number){
    return this.http.delete(this.apiURL + "/"+ id)
  }
  getUserById(id :number){
    return this.http.get<User>(this.apiURL + "/"+ id)
  }

  UpdateUser(user : User){
    return this.http.put(this.apiURL+ "/"+ user.id, user)
  }
}
