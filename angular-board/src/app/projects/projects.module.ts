import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { EditorProjectsFormsComponent } from './editor-projects-forms/editor-projects-forms.component';
import { NewProjectFormsComponent } from './new-project-forms/new-project-forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './request-interceptor.service';

@NgModule({
  declarations: [NewProjectComponent,
    EditorProjectComponent,
    ProjectsComponent,
    FilterProjectsComponent,
    ProjectsListComponent,
    EditorProjectsFormsComponent,
    NewProjectFormsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule { }
