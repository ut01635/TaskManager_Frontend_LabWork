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

  constructor (private taskService : TaskService, private router:Router, private toastr : ToastrService){  }

  ngOnInit(): void {
    this.loadTask()
  }

  addTask(){
    this.router.navigate(["/task-add"])
  }

  onDelete(id : number){
    return this.taskService.deleteTask(id).subscribe( data => {
      this.toastr.success("Task is deleted")
      this.loadTask()
    }, error =>{
      this.toastr.error("Task delete faild")
    } )
  }

  loadTask(){
    this.taskService.getTask().subscribe(d => {
      this.tasks = d
    })
  }

  onEdit(taskId : number){
    this.router.navigate(['/task-edit',taskId ])
  }


}
