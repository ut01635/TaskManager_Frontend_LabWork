import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  apiURL = 'http://localhost:5092/api/TaskItems'

  constructor(private http : HttpClient) { }

  getTask(){
    return this.http.get<any[]>(this.apiURL)
  }

  addTask(task : any){
    return this.http.post(this.apiURL, task)
  }

  deleteTask(id :number){
    return this.http.delete(this.apiURL + "/"+ id)
  }
}
