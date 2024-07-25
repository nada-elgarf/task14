import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
      TaskListComponent,
      AddTaskComponent,
      TaskDetailsComponent,
      EditTaskComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
