import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  {path : '', component :ListViewComponent},
  {path : 'add',component : AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
