import { Component, OnInit } from '@angular/core';
import {Project} from './models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = [];
    for (const proyecto of environment.projects){
      const project: Project = {
        id: proyecto.id,
        name: proyecto.name
      };
      this.projects.push(project);
    }
  }

}
