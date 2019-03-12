import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../projects/models/project';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-new-project-forms',
  templateUrl: './new-project-forms.component.html',
  styles: []
})
export class NewProjectFormsComponent implements OnInit {

  public projectname: string;
  public addedProjects: Project[];
  @Output() public update = new EventEmitter();
  constructor(private serviceProject: ProjectsService) { }

  ngOnInit() {
  }

  public saveChanges(){
    this.serviceProject.insertProject(this.projectname);
  }

}
