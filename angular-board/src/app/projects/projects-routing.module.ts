import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';

const routes: Routes = [
  { path: '',
  component: ProjectsComponent,
  children: [{ path: 'newproject',
    component: NewProjectComponent}
  ]},
  { path: 'editproject/:id',
  component: EditorProjectComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
