import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task | undefined ;
  constructor(  private route: ActivatedRoute, private taskService: TaskService,private router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
