import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 
  taskForm : FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router,private toastr: ToastrService){
    this.taskForm = this.fb.group({
      title :['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:['',[Validators.required]]
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
