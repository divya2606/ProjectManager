import { Pipe, PipeTransform } from '@angular/core';
import { AddUser } from './add-user';
import { AddProject } from './add-project';
import { Task } from './view-task';

@Pipe({
  name: 'userFilter'
})
export class FilterPipe implements PipeTransform {
  transform(users: AddUser[], searchText: string) {
    // console.log(users, searchText);
    if (users && users.length) {
      if (!users && (!searchText)) {
        return users;
      }
      // console.log("after");
      return users.filter(user => {
        console.log(user.fname);
        if (searchText) {

          if ((user.fname.toLowerCase().indexOf(searchText.toLowerCase()) === 0)
            || (user.lname.toLowerCase().indexOf(searchText.toLowerCase()) === 0)
            || (user.eid == searchText)
          ) {
            // console.log("fname false");
            return true;
          }
          else {
            // else if (searchText && user.lname.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
            //   console.log("lname false");
            //     return false;
            // }
            return false;
          }
        }
        return true;
      })
    }
    else {
      return users;
    }
  }


}


@Pipe({
  name: 'projectFilter'
})
export class ProjectFilter implements PipeTransform {
  transform(projects: AddProject[], searchProject: string) {
    // console.log(projects, searchProject);
    if (projects && projects.length) {
      if (!projects && (!searchProject)) {
        return projects;
      }
      // console.log("after");
      return projects.filter(project => {
        // console.log(project.project);
        if (searchProject) {

          if ((project.project.toLowerCase().indexOf(searchProject.toLowerCase()) === 0)
            || (project.sdate.toLowerCase().indexOf(searchProject.toLowerCase()) === 0)
            || (project.edate.toLowerCase().indexOf(searchProject.toLowerCase()) === 0)
            || (project.taskCount == searchProject)
            || (project.tcomCount == searchProject)
            || (project.priority == searchProject)
          ) {
            console.log("fname false");
            return true;
          }
          else {
            return false;
          }

        }
        return true;
      })
    }
    else {
      return projects;
    }
  }
}

@Pipe({
  name: 'taskFilter'
})
export class TaskFilter implements PipeTransform {
  transform(tasks: Task[], spname: string) {
    // console.log(projects, searchProject);
    if (tasks && tasks.length) {
      if (!tasks && (!spname)) {
        return tasks;
      }
      // console.log("after");
      return tasks.filter(task => {
        // console.log(project.project);
        if (spname) {

          if ((task.pname.toLowerCase().indexOf(spname.toLowerCase()) === 0)
          ) {
            console.log("fname false");
            return true;
          }
          else {
            return false;
          }

        }
        return true;
      })
    }
    else {
      return tasks;
    }
  }
}
