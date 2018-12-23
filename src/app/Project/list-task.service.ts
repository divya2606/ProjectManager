import {Http,Response,RequestOptions,Headers} from '@angular/http';
//import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import {Task} from './task';
import {AddProject} from './add-project';
import {AddUser} from './add-user';
import {AddTask} from './add-task';
import {AddParentProject} from './add-task-parenttask';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Task} from './view-task';

@Injectable()
export class listTaskService{
    private updateTask :Task;
    constructor(private _httpService:Http){}

    
    setter(updateTask :Task){

        this.updateTask =updateTask ;
        console.log(updateTask);
    }

    
    setterUpdate(){

        this.updateTask =null ;

    }

    getter(){
        return this.updateTask ;
    }
    
    getAllTasks(): Observable<Task[]>{
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url="http://localhost:8081/taskmanager/api/getTasks/";         
        let options = new RequestOptions({headers: headers});
       return this._httpService.get(url,options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
            }


            getAllParentProjects(): Observable<AddParentProject[]>{
                const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
                const url="http://localhost:8081/taskmanager/api/getAllParentProjects/";         
                let options = new RequestOptions({headers: headers});
               return this._httpService.get(url,options)
                .map((response: Response) => response.json())
                .catch(this.handleError);
                    }
            
            
    getAllProjects(): Observable<AddProject[]>{
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url="http://localhost:8081/taskmanager/api/getAllProjects/";         
        let options = new RequestOptions({headers: headers});
       return this._httpService.get(url,options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
            }

    getAllUsers(): Observable<AddUser[]> {
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url = "http://localhost:8081/taskmanager/api/getAllUsers/";
        let options = new RequestOptions({ headers: headers });
        return this._httpService.get(url, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    
    getProjectDetails(): Observable<AddProject[]> {
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url = "http://localhost:8081/taskmanager/api/getProjects/";
        let options = new RequestOptions({ headers: headers });
        return this._httpService.get(url, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    sortTask(sortId: string): Observable<AddUser[]> {
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url = "http://localhost:8081/taskmanager/api/getAllUsers/"+sortId;
        let options = new RequestOptions({ headers: headers });
        return this._httpService.get(url, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }


    sortTasks(sortId: string): Observable<Task[]> {
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url = "http://localhost:8081/taskmanager/api/getTasks/"+sortId;
        let options = new RequestOptions({ headers: headers });
        return this._httpService.get(url, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    sortTaskProject(sortId: string): Observable<AddProject[]> {
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        const url = "http://localhost:8081/taskmanager/api/getProjects/"+sortId;
        let options = new RequestOptions({ headers: headers });
        return this._httpService.get(url, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
          return Observable.throw(error); 
    }

    
    addProject(task: AddProject){
        let body=JSON.stringify(task);
        //let headers = new Headers({'Content-Type': 'application/json'});
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        let options = new RequestOptions({headers: headers});
        // return this._httpService.post("http://localhost:8081/taskmanager/api/addProject",task,options);
        if(task.projectId){
            return this._httpService.put("http://localhost:8081/taskmanager/api/addProject/"+task.projectId,task,options);
        }else{
        return this._httpService.post("http://localhost:8081/taskmanager/api/addProject",task,options);
        }
    }

    addTask(task: AddTask){
        let body=JSON.stringify(task);
        //let headers = new Headers({'Content-Type': 'application/json'});
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        let options = new RequestOptions({headers: headers});
        if(task.taskId){
            return this._httpService.put("http://localhost:8081/taskmanager/api/addTask/"+task.taskId,task,options);
        }else
        {
        return this._httpService.post("http://localhost:8081/taskmanager/api/addTask",task,options);
        }
    }

   
    addUser(task: AddUser){
        let body=JSON.stringify(task);
        //let headers = new Headers({'Content-Type': 'application/json'});
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        let options = new RequestOptions({headers: headers});
        if(task.userId){
            return this._httpService.put("http://localhost:8081/taskmanager/api/user/"+task.userId,task,options);
        }else{
        return this._httpService.post("http://localhost:8081/taskmanager/api/addUser",task,options);
        }
    }

    deleteUser(userId: string){
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        //headers.append('Access-Control-Allow-Origin', '*');
      ///headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      //headers.append('Content-Type', 'application/json; charset=utf-8');
      
        let options = new RequestOptions({headers: headers});
      return  this._httpService.delete("http://localhost:8081/taskmanager/api/user/"+userId,options);
    } 

    // getTaskById(taskId: string): Observable<Task>{
    //    const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
    //     let options = new RequestOptions({headers: headers});
    //     const url="http://localhost:8081/taskmanager/api/taskmanager/"+taskId;        
    //     return  this._httpService.get(url)
    //     .map((response: Response) => response.json())
    //     .catch(this.handleError);
    //       } 

    // private handleError(error: Response){
    //       return Observable.throw(error); 
    // }
    
    


    // addTask(task: Task){
    //     let body=JSON.stringify(task);
    //     //let headers = new Headers({'Content-Type': 'application/json'});
    //     const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
    //     let options = new RequestOptions({headers: headers});
    //     return this._httpService.post("http://localhost:8081/taskmanager/api/task",task,options);
    // }

    deleteTask(taskId: string){
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        //headers.append('Access-Control-Allow-Origin', '*');
      ///headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      //headers.append('Content-Type', 'application/json; charset=utf-8');
      
        let options = new RequestOptions({headers: headers});
      return  this._httpService.delete("http://localhost:8081/taskmanager/api/deleteTask/"+taskId,options);
    } 

    
    endTask(taskId: string){
        const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
        //headers.append('Access-Control-Allow-Origin', '*');
      ///headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      //headers.append('Content-Type', 'application/json; charset=utf-8');
      
        let options = new RequestOptions({headers: headers});
      return  this._httpService.put("http://localhost:8081/taskmanager/api/endTask/"+taskId,options);
    } 

    // editTask(task: Task,taskId: string){

    //     let body=JSON.stringify(task);
    //     const headers = new Headers({ Authorization: 'Basic ' + btoa('Divya:Bharathi') });
    //     let options = new RequestOptions({headers: headers});
    //        return this._httpService.put("http://localhost:8081/taskmanager/api/task/"+taskId,task,options);
    // }

    }