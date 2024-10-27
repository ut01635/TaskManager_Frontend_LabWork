import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
 
  taskForm : FormGroup;

  users :User[] = []

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router,private toastr: ToastrService,private userService:UserService){
    this.taskForm = this.fb.group({
      title :['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:['',[Validators.required]],
      assigneeId : ['']
    })
   }


   ngOnInit(): void {
     this.userService.getUser().subscribe(data=>{
      this.users = data
     })
   }

   onSubmit(){
    let task = this.taskForm.value;
    this.taskService.addTask(task).subscribe(data =>{
      this.toastr.success("Task is created successfully")
      this.router.navigate(["/tasks"]);
    },Error =>{
      this.toastr.error("Task created failed")
    })
   }

   resetForm(){
    this.taskForm.reset();
    this.router.navigate(["/tasks"]);
   }

}
