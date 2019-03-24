import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  ngOnInit() {
    this.projectEnvironment = environment.projects.filter(c => c.id == this.projectId)[0];
    this.buildForm();

  }

  private buildForm(){
    //let name: '';
    window.alert(this.projectEnvironment.name + ' form');
    this.formGroup = this.formBuilder.group({
      name: [this.projectEnvironment.name, [Validators.required]],
      id: this.projectId
    });
  }

  public saveChanges() {
    window.alert((this.formGroup.value as Project).name);
    this.serviceProject.editChanges(this.formGroup.value as Project);
  }
}
