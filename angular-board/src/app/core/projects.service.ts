import { Injectable } from '@angular/core';
import { Project } from '../projects/projects/models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectList: Project[];

  constructor() { }

  public insertProject(projectname: string) {
    const projetToAdd: Project = {id: environment.projects.length + 1, name: projectname };
    environment.projects.push({...projetToAdd});
  }

  public editChanges(project: Project) {
    environment.projects.filter(c => c.id == project.id)[0].name = project.name;
  }

  public deleteProject(project: Project){
    const ind = environment.projects.findIndex(c => c.id == project.id)[0];
    environment.projects.splice(ind, 1);
  }

  public filterProject(id: number){
    return environment.projects.filter(c => c.id == id)[0];
  }
}