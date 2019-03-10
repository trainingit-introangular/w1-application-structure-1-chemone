import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { EditorProjectsFormsComponent } from './editor-projects-forms/editor-projects-forms.component';
import { NewProjectFormsComponent } from './new-project-forms/new-project-forms.component';

@NgModule({
  declarations: [NewProjectComponent, EditorProjectComponent, ProjectsComponent, FilterProjectsComponent, ProjectsListComponent, EditorProjectsFormsComponent, NewProjectFormsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
