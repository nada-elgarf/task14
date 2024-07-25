import { Injectable } from '@angular/core';
import { Task } from './model/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];


constructor() { }

getTasks(): Task[] {
  return this.tasks;
}

getTask(id: number): Task | undefined {
  return this.tasks.find(task => task.id === id);
}

addTask(task: Task): void {
  this.tasks.push(task);
}

updateTask(updatedTask: Task): void {
  const index = this.tasks.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    this.tasks[index] = updatedTask;
  }
}

deleteTask(id: number): void {
  this.tasks = this.tasks.filter(task => task.id !== id);
}

}
