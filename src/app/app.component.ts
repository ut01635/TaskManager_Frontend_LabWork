import { Component, OnInit } from '@angular/core';
import { TaskService } from './Services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'task-manager';

 

  constructor (){  }

  ngOnInit(): void {
    
  }

}
