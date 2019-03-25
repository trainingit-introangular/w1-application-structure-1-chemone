import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../projects/models/project';
import { ProjectsService } from 'src/app/core/projects.service';
import { FormBuilder, FormGroup, AbstractControl, ControlContainer, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-forms',
  templateUrl: './new-project-forms.component.html',
  styles: []
})
export class NewProjectFormsComponent implements OnInit {

  public projectname: string;
  public addedProjects: Project[];
  public formGroup: FormGroup;
  @Output() public update = new EventEmitter<FormGroup>();
  // codig anterior a reactive forms
  constructor(private formBuilder: FormBuilder, private serviceProject: ProjectsService) {

  }

  ngOnInit() {
    this.buildForm();
  }
  /*constructor(private serviceProject: ProjectsService) { }

  ngOnInit() {
  }*/

  private buildForm(){
    //let name: '';
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  public saveChanges() {
    this.serviceProject.insertProject(this.formGroup.value);
  }

  public deleteUrl(){
    this.serviceProject.clearProjectsUrl();
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
