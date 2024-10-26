import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users :User[] =[];

  SearchText :string ='';

  constructor (private userService : UserService, private router:Router, private toastr : ToastrService){  }

  ngOnInit(): void {
    this.loadUser()
  }

  addUser(){
    this.router.navigate(["/user-add"])
  }

  onDelete(id : number){
    return this.userService.deleteUser(id).subscribe( data => {
     confirm('Are you want delete this user?')
      this.loadUser()
      this.toastr.success("User is deleted")
    }, error =>{
      this.toastr.error("User delete faild")
    } )
  }

  loadUser(){
    this.userService.getUser().subscribe(d => {
      console.log(d);
      
      this.users = d
    })
  }

  onEdit(userId : number){
    this.router.navigate(['/user-edit',userId ])
  }

}
