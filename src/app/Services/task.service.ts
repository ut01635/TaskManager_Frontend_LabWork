import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  apiURL = 'https://localhost:7059/api/TaskItems'

  constructor(private http : HttpClient) { }

  getTask(){
    return this.http.get<Task[]>(this.apiURL)
  }

  addTask(task : any){
    return this.http.post(this.apiURL, task)
  }

  deleteTask(id :number){
    return this.http.delete(this.apiURL + "/"+ id)
  }
  getTaskById(id :number){
    return this.http.get<Task>(this.apiURL + "/"+ id)
  }

  UpdateTask(task : Task){
    return this.http.put(this.apiURL+ "/"+ task.id, task)
  }

  
}
