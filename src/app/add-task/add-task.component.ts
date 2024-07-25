import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '', completed: false };


  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }
  addTask(): void {
    this.task.id = new Date().getTime();
    this.taskService.addTask(this.task);
    this.router.navigate(['/tasks']);
  }

}
