import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../Models/task';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {

  tasks :Task[] =[];

  SearchText :string ='';

  constructor (private taskService : TaskService, private router:Router){  }

  ngOnInit(): void {
    this.loadTask()
  }

  addTask(){
    this.router.navigate(["/add"])
  }

  onDelete(id : number){
    return this.taskService.deleteTask(id).subscribe( data => {
      alert ("Task is deleted")
      this.loadTask()
    } )
  }

  loadTask(){
    this.taskService.getTask().subscribe(d => {
      this.tasks = d
    })
  }


}
