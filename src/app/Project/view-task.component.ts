import {Component, OnInit} from '@angular/core';
import {listTaskService} from './list-task.service';
import {Task} from './view-task';
import { AddTask } from './add-task';
import { AddProject } from './add-project';
import {Router} from '@angular/router';

@Component ({
    selector: 'view-task',
    templateUrl: './view-task.component.html',
    styleUrls: ['./add-project.component.css']
})

export class ViewTaskComponent {
  tasks: Task[];
  projectDet: AddProject[];
  spname: string;
  


  constructor(private _taskService: listTaskService, private _router:Router) { }
  
  sortTask(sortId: string): void{
    this._taskService.sortTasks(sortId)
    .subscribe((taskData) =>
     {this.tasks = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });

}

updateTask(task){
  console.log(task);
  this._taskService.setter(task);
  this._router.navigate(["/addtask"]);
}

  getTasks(): void{
    this._taskService.getAllTasks()
    .subscribe((taskData) =>
     {this.tasks = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });
  }
  
   ngOnInit(): void {
     this.getTasks();
   }

  deleteTask(taskId: string){
  this._taskService.deleteTask(taskId)
  .subscribe((response) => { console.log(response); this.getTasks();}),
    (error) => {
    console.log(error);
  }
  this.getTasks();
  }

  
  endTask(taskId: string){
    this._taskService.endTask(taskId)
    .subscribe((response) => { console.log(response); this.getTasks();}),
      (error) => {
      console.log(error);
    }
    this.getTasks();
    }

  // updateTask(task){
  //   console.log(task);
  //   this._taskService.setter(task);
  //   this._router.navigate(["/update"]);
  // }  
  projectdisplay='none';  
  projectModal(): void{
    this.projectdisplay='block'; 
    this._taskService.getAllProjects()
    .subscribe((taskData) =>
     {this.projectDet = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });
  }

  onProjectCloseHandled(){
    this.projectdisplay='none'; 
  }
  

    selectProj(proj){
      console.log(proj);
      this.spname=proj.project;
      this.projectdisplay='none';
    } 
}