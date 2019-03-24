import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../projects/models/project';
import { ProjectsService } from 'src/app/core/projects.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: this.projectname
    });
  }

  public saveChanges(){
    this.serviceProject.insertProject(this.projectname);
  }

  public deleteUrl(){
    this.serviceProject.clearProjectsUrl();
  }
}
