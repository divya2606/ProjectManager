import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from "./Project/add-project.component";
import { AddTaskComponent } from "./Project/add-task.component";
import { AddUserComponent } from "./Project/add-user.component";
import { ViewTaskComponent } from "./Project/view-task.component";
import { listTaskService } from './Project/list-task.service';
import { FilterPipe } from './Project/filter.pipe';
import { ProjectFilter } from './Project/filter.pipe';
import { TaskFilter} from './Project/filter.pipe';

export  const  appRoutes : Routes =[
  {path: 'addproject', component: AddProjectComponent},
  {path: 'addtask', component: AddTaskComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'viewtask', component: ViewTaskComponent},
  {path: '', redirectTo: '/addproject' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddTaskComponent,
    AddUserComponent,
    ViewTaskComponent,
    FilterPipe,
    ProjectFilter,
    TaskFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [listTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
