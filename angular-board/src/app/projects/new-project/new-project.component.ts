import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/models/project';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {

  public projectname: string;
  public addedProjects: Project[];
  constructor() { }

  ngOnInit() {
    this.addedProjects = [];
  }
  public saveChanges() {
    const projetToAdd: Project = {id: environment.projects.length + 1, name: this.projectname };
    environment.projects.push({...projetToAdd});
    this.addedProjects.push({...projetToAdd});
  }

}
