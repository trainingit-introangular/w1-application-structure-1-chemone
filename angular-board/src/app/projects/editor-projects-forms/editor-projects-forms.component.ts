import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editor-projects-forms',
  templateUrl: './editor-projects-forms.component.html',
  styles: []
})
export class EditorProjectsFormsComponent implements OnInit {

  public projectId: number;
  public projectEnvironment: Project;
  constructor(activateRoute: ActivatedRoute, private serviceProject: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.projectEnvironment = environment.projects.filter(c => c.id == this.projectId)[0];

  }

  public saveChanges(){
    this.serviceProject.editChanges(this.projectEnvironment);
  }
}
