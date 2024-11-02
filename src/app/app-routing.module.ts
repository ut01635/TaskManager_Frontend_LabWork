import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path : 'tasks', component :ListViewComponent},
  {path: 'users', component:UserListComponent},

  {path : 'task-add',component : AddTaskComponent},
  {path: 'task-edit/:id', component: EditTaskComponent},

  {path:'user-add',component:AddUserComponent},
  {path:'user-edit/:id',component:AddUserComponent},

  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'', component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
