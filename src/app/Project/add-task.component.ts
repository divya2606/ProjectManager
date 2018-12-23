import {Component, OnInit} from '@angular/core';
import {AddTask} from './add-task';
import {AddUser} from './add-user';
import {listTaskService} from './list-task.service';
import { AddProject } from './add-project';
import {AddParentProject} from './add-task-parenttask';
import {Task} from './view-task';
import {formatDate} from '@angular/common';
@Component ({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-project.component.css']
})

export class AddTaskComponent implements OnInit  {
    newTask = new AddTask(); 
    private updateTask:Task;
    userdetails: AddUser[];
    projectDet: AddProject[];
    ptaskDet: AddParentProject[];
    projectdisplay: string;
    userdisplay: string;
    ptaskdisplay: string;
    button: string;
    disableparentcheck: string;
    today: Date;
    nextdate: Date;
    // edittaskcheck: string;

    constructor(private _taskService: listTaskService) { }

  ngOnInit() {
    this.button = "AddTask";
    this.today = new Date();
    this.nextdate = new Date();
    this.nextdate.setDate(this.nextdate.getDate() + 1);
    this.newTask.tsdate = formatDate(this.today, 'yyyy-MM-dd', 'en');
    this.newTask.tedate = formatDate(this.nextdate, 'yyyy-MM-dd', 'en');
    // this.newTask.pcheck="";
    // this.edittaskcheck = "true";
     this.updateTask=this._taskService.getter();
     if(this.updateTask){
    this.newTask.ptask=this.updateTask.ptask;
    this.newTask.tedate=this.updateTask.tedate;
    this.newTask.tsdate=this.updateTask.tsdate;
    this.newTask.tpriority=this.updateTask.tpriority;
    this.newTask.tname=this.updateTask.tname;
    this.newTask.pname=this.updateTask.pname;
    this.newTask.pcheck="";
    this.newTask.taskId=this.updateTask.taskId;
    this.newTask.empId=this.updateTask.empId;
    this.button = "UpdateTask";
    this.disableparentcheck = "true";
    // this.edittaskcheck = "false";
    this._taskService.setterUpdate();
     }
   console.log(this.newTask,this.today,this.nextdate);
  }
  addProject(): void{
    this._taskService.addTask(this.newTask)
    .subscribe((response) =>  {
      console.log(response);
      this.reset();
    }
      ,(error) => {
      console.log(error);
    });
  } 

  // userdisplay='none';
  userModal(): void{
    this.userdisplay='block'; 
    this._taskService.getAllUsers()
    .subscribe((taskData) =>
     {this.userdetails = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });
  
  }

  onUserCloseHandled(){
    this.userdisplay='none'; 
  }

  selectUser(user){
    console.log(user);
    this.newTask.empId=user.fname;
    this.userdisplay='none';
  }

  // projectdisplay='none';  
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
    // console.log(proj);
    this.newTask.pname=proj.project;
    this.projectdisplay='none';
  }

  ptaskModal(): void{
    this.ptaskdisplay='block'; 
    this._taskService.getAllParentProjects()
    .subscribe((taskData) =>
     {this.ptaskDet = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });
  }

  onPtaskCloseHandled(){
    this.ptaskdisplay='none'; 
  }
  
  selectPtask(ptask){
    // console.log(proj);
    this.newTask.ptask=ptask.ptask;
    this.ptaskdisplay='none';
  }

  private reset(){
    this.newTask.pname=null;
    this.newTask.ptask=null;
    this.newTask.tedate=null;
    this.newTask.tname=null;
    this.newTask.tpriority=null;
    this.newTask.tsdate=null;
    this.newTask.empId=null;
    // this.newTask.pcheck="";
  }
}