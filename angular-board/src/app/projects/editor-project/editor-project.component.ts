import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editor-project',
  templateUrl: './editor-project.component.html',
  styles: []
})
export class EditorProjectComponent implements OnInit {

  public projectId: number;
  public projectEnvironment: Project;
  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.projectEnvironment = environment.projects.filter(c => c.id == this.projectId)[0];

  }

  public saveChanges() {
    environment.projects.filter(c => c.id == this.projectId)[0].name = this.projectEnvironment.name;
    window.history.back();
  }

}
