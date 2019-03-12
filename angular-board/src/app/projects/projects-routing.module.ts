import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditorProjectsFormsComponent } from './editor-projects-forms/editor-projects-forms.component';

const routes: Routes = [
  { path: '',
  component: ProjectsComponent},
  {path: 'newproject',
    component: NewProjectComponent},
  { path: 'editproject/:id',
  component: EditorProjectsFormsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
