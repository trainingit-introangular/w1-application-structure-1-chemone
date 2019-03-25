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
    this.formGroup = this.formBuilder.group({
      name: [this.projectEnvironment.name, [Validators.required]],
      id: this.projectId
    });
  }

  public saveChanges() {
    this.serviceProject.editChanges(this.formGroup.value as Project);
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    //touched el usuario ha entrado en el control y ha salido
    if (control.touched && control.errors != null) {
      error = 'Este campo es obligatorio'; //JSON.stringify(control.errors);
    }
    return error;
  }
}
