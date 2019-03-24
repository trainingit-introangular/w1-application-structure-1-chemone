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
  @Output() public update = new EventEmitter();
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
      name: ['', [Validators.minLength(1)]]
    });
  }

  private validateName(control: AbstractControl){
    const name = control.value;
    let error = null;
    if (name.length == 0 || name == undefined){
      error = {...error, name: 'needs a name'}
    }
    return error;
  }

  public saveChanges() {
    window.alert(this.formGroup.get('name').value);
    this.serviceProject.insertProject(this.formGroup.value);
  }

  public deleteUrl(){
    this.serviceProject.clearProjectsUrl();
  }

  public getError(controlName: string): string {
    window.alert(controlName);
    let error = '';
    const control = this.formGroup.get(controlName);
    //touched el usuario ha entrado en el control y ha salido
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
