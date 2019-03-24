import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editor-projects-forms',
  templateUrl: './editor-projects-forms.component.html',
  styles: []
})
export class EditorProjectsFormsComponent implements OnInit {

  public formGroup: FormGroup;
  public projectId: number;
  public projectEnvironment: Project;
  constructor(private formBuilder: FormBuilder, activateRoute: ActivatedRoute, private serviceProject: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  private buildForm(){
    //let name: '';
    this.formGroup = this.formBuilder.group({
      name: this.projectEnvironment.name,
      id: this.projectId
    });
  }

  ngOnInit() {
    this.projectEnvironment = environment.projects.filter(c => c.id == this.projectId)[0];
    this.buildForm();

  }

  public saveChanges() {
    window.alert((this.formGroup.value as Project).name);
    this.serviceProject.editChanges(this.formGroup.value as Project);
  }
}