import {Component, OnInit} from '@angular/core';
import {AddProject} from './add-project';
import {AddUser} from './add-user';
import {listTaskService} from './list-task.service';
import { NgForm } from '@angular/forms';
@Component ({
    selector: 'add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit  {
    newProject = new AddProject(); 
    projectdetails: AddProject[];
    userdetails: AddUser[];
    button: string;
    datecheck: string;
    manager: string;
    constructor(private _taskService: listTaskService) { }

  ngOnInit() {
    this.getProjectDetails();
    this.button="Add";
    this.datecheck="";
    console.log(this.datecheck);
  }

  selectManager(user){
    console.log(user);
    this.manager=user.fname;
    this.display='none';
  }

  updateProject(task){
    console.log(task);
    this.newProject=task;
    this.button="Update";
    if(this.newProject.sdate){
      this.datecheck="true";
    }
    else {
      this.datecheck="";
    }
   // this._router.navigate(["/update"]);
   this.getProjectDetails();
  }

  sortTaskProject(sortId: string): void{
    this._taskService.sortTaskProject(sortId)
    .subscribe((taskData) =>
     {this.projectdetails = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });

}

  getProjectDetails(): void{
    this._taskService.getProjectDetails()
    .subscribe((taskData) =>
     {this.projectdetails = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });

  }
  
  addProject(): void{
    this._taskService.addProject(this.newProject)
    .subscribe((response) =>  {
      console.log(response);
      this.reset();
      this.getProjectDetails();
    }
      ,(error) => {
      console.log(error);
    });
  } 

  
  private reset(){
    console.log("reset");
    this.newProject.edate=null;
    this.newProject.pname=null;
    this.newProject.priority=null;
    this.newProject.sdate=null;
    this.newProject.pname=null;
    this.newProject.project=null;
    this.newProject.projectId=null;
    this.manager=null;
    this.button="Add";
    
  }
  display='none';
//   managerModal(){
//     this.display='block'; 
//  }



 managerModal(): void{
  this.display='block'; 
  this._taskService.getAllUsers()
  .subscribe((taskData) =>
   {this.userdetails = taskData, console.log(taskData) },
   (error) =>{
    console.log(error);
  });

}
 onCloseHandled(){

  this.display='none'; 

  }
}