import {Component, OnInit} from '@angular/core';
import {AddUser} from './add-user';
import {listTaskService} from './list-task.service';

@Component ({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-project.component.css']
})

export class AddUserComponent implements OnInit  {
    newUser = new AddUser(); 
    users: AddUser[];
    button: string;
    constructor(private _taskService: listTaskService) { }

    getUsers(): void{
      this._taskService.getAllUsers()
      .subscribe((taskData) =>
       {this.users = taskData, console.log(taskData) },
       (error) =>{
        console.log(error);
      });
  
    }

    sortTask(sortId: string): void{
      this._taskService.sortTask(sortId)
      .subscribe((taskData) =>
       {this.users = taskData, console.log(taskData) },
       (error) =>{
        console.log(error);
      });
  
  }

    ngOnInit(): void {
      this.button="Add";
      this.getUsers();
    }

    addUser(): void{
    this._taskService.addUser(this.newUser)
    .subscribe((response) =>  {
      console.log(response);
      this.resetdt();
      this.getUsers();
     // this.newUser=null;
    }
   
      ,(error) => {
      console.log(error);
    })
    //this.newUser=null;
  } 

    
  private resetTs(){
    console.log(this.users);
    this.newUser.eid=null;
    this.newUser.fname=null;
    this.newUser.lname=null;
    this.button="Add";
    this.getUsers();
    console.log(this.users);
  }

  private resetdt(){
    this.newUser.eid=null;
    this.newUser.fname=null;
    this.newUser.lname=null;
    this.newUser.userId=null;
    this.button="Add";
    this.getUsers();
    console.log(this.users);
  }

  deleteUser(userId: string){
    this._taskService.deleteUser(userId)
    .subscribe((response) => { console.log(response);
      this.getUsers();
      }),
      (error) => {
      console.log(error);
    }
  
    }

    
    updateUser(task){
    // console.log(task);
    this.newUser=task;
    this.button="Update";
   // this._router.navigate(["/update"]);
  }

}