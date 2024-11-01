import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../Models/task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {

  tasks :Task[] =[];

  SearchText :string ='';

  taskId = 0;

  constructor (
    private taskService : TaskService, 
    private router:Router, 
    private toastr : ToastrService
  ){ 

   }

  ngOnInit(): void {
    this.loadTask()

    
    
  }

  addTask(){
    this.router.navigate(["/task-add"])
  }

  onDelete(id : number){
    return this.taskService.deleteTask(id).subscribe( data => {
      confirm("Are you want delete this task?")
      this.loadTask()
      this.toastr.success("Task is deleted successfully!")
    }, error =>{
      this.toastr.error("Task delete failed!")
    } )
  }

  loadTask(){
    this.taskService.getTask().subscribe(d => {
      this.tasks = d
      console.log(d);
      
    })
  }

  onEdit(taskId : number){
    this.router.navigate(['/task-edit',taskId ])
  }


}
