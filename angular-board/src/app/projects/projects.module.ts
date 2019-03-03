import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewProjectComponent, EditorProjectComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
