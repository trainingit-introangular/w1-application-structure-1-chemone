import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];
  @Output() public delete = new EventEmitter();
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
