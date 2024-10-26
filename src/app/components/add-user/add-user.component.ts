import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  isEdit = false;
  userId: number;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {

    const PatchId = this.route.snapshot.paramMap.get('id');
    this.userId = Number(PatchId)

    console.log(PatchId)


    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.email]],
      phone: ['', [Validators.pattern(/^07\d{8}$/)]],
      password: ['', [Validators.required,Validators.minLength(8)]]
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

        this.userForm.patchValue({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password
        })
      }, error => {
        this.toastr.error('User is not found!')
      })
    }
  }

  onSubmit() {
    let User:User = this.userForm.value;

    if (this.isEdit == true) {
      User.id = this.userId
      this.userService.UpdateUser(User).subscribe(data => {
        this.toastr.success('user updated successfully');
        this.router.navigate(['/users'])
      }, Error => {
        this.toastr.error("User Updated failed")
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

  resetForm() {
    this.userForm.reset();
    this.router.navigate(["/users"]);
  }
}
