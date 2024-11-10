import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup
  message: string = ""

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) {

    this.loginForm = this.fb.group({
      Email: [''],
      password: ['']
    })
  }


  onSubmit() {
    let loginUser = this.loginForm.value


    this.userservice.loginUser(loginUser).subscribe((data:any) => {
      localStorage.setItem("Token",data.token)
     this.router.navigate(['/admin/tasks'])
      console.log(data);
    }, error => {
      this.toastr.error(error.error)
      this.message = error.error
      console.log(error.error);
    })
  }

}
