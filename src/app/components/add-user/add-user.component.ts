import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  isEdit = false;
  userId: number;
  isSubmited:boolean = false;
  addressId: number = 0

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute, private taskService : TaskService) {

    const PatchId = this.route.snapshot.paramMap.get('id');
    this.userId = Number(PatchId)

    console.log(PatchId)


    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.email]],
      phone: ['', [Validators.pattern(/^07\d{8}$/)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      address : this.fb.group({
        addressLine1 : ['', [Validators.required]],
        addressLine2 : [''],
        city : ['']
      })
    })

    if (PatchId) {
      this.isEdit = true
    } else {
      this.isEdit = false
    }
  }

  ngOnInit(): void {
    if (this.isEdit == true) {
      this.userService.getUserById(this.userId).subscribe(data => {
        console.log(data);
        this.addressId = Number(data.address?.id)

        this.userForm.patchValue({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          address: {
            addressLine1: data.address?.addressLine1,
            addressLine2: data.address?.addressLine2,
            city: data.address?.city,
          }
        });
        
       
      }, error => {
        this.toastr.error('User is not found!')
      })
    }
  }

  onSubmit() {
    let User:User = this.userForm.value;
    this.isSubmited = true;
   

    if(this.userForm.valid){

      if (this.isEdit == true) {
        User.id = this.userId
        
        this.userService.UpdateUser(User).subscribe(data => {
          this.isSubmited = false;
  
          this.toastr.success('user updated successfully');
          this.router.navigate(['/users'])
        }, Error => {
          this.toastr.error("User Updated failed");
          this.isSubmited = false;
        })
      }
      else {
        
        this.userService.addUser(User).subscribe(data => {
          this.toastr.success("User is created successfully")
          this.router.navigate(["/users"]);
        }, Error => {
          this.toastr.error("User created failed")
        })
      }
  
    }
   

  }

  resetForm() {
    this.userForm.reset();
    this.router.navigate(["/users"]);
  }
}
