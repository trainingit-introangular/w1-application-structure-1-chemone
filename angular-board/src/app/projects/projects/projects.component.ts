import { Component, OnInit } from '@angular/core';
import {Project} from './models/project';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public urlProjects: Project[];

  constructor(private servicio: ProjectsService) { }
  ngOnInit() {
    this.projects = [];
    this.urlProjects = [];
    for (const proyecto of environment.projects) {
      const project: Project = {
        id: proyecto.id,
        name: proyecto.name
      };
      this.projects.push(project);
    }
    this.urlProjects = this.servicio.returnUrlList();
    if(this.servicio.returnUrlList() != null){
      this.projects.concat(this.urlProjects);
    }
  }

  public onUpdate(proyectos: string) {
    this.servicio.insertProject(proyectos);
    this.projects = environment.projects;
  }

  public onDelete(id: number) {
    this.servicio.deleteProject(id);
    this.projects = environment.projects;
  }

}
