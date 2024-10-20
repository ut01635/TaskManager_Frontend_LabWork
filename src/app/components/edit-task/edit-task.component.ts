import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../Services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {

  taskId :number =0 
  taskForm : FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private route :ActivatedRoute, private toastr : ToastrService){
    this.taskForm = this.fb.group({
      title :['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:['',[Validators.required]]
    })


    const PatchId = this.route.snapshot.paramMap.get('id');
    this.taskId = Number(PatchId)
   }
   
   

   ngOnInit(): void {

    this.taskService.getTaskById(this.taskId).subscribe(data =>{

        let formatdate = new Date(data.dueDate).toISOString().slice(0,10);
        this.taskForm.patchValue({
          title : data.title,
          description : data.description,
          dueDate : formatdate,
          priority : data.priority
     })
    })
   
   }


   onSubmit(){
    let task = this.taskForm.value;
    task.id = this.taskId;
    this.taskService.UpdateTask(task).subscribe(data =>{
      this.toastr.success("Task is update successfully")
      this.router.navigate(["/tasks"]);
    }, Error =>{
      this.toastr.error("Task updated failed")
    });
    
   }

   resetForm(){
    this.taskForm.reset();
    this.router.navigate(["/tasks"]);
   }
}
