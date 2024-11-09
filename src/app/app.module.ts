import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlanklayoutComponent } from './layout/blanklayout/blanklayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddTaskComponent,
    TaskFilterPipe,
    EditTaskComponent,
    UserListComponent,
    AddUserComponent,
    LoginComponent,
    RegisterComponent,
    BlanklayoutComponent,
    AdminlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
