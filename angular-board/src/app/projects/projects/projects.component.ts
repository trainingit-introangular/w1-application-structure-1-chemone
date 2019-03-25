import { Component, OnInit } from '@angular/core';
import {Project} from './models/project';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/core/projects.service';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public urlProjects$: Observable<Project[]>;

  constructor(private servicio: ProjectsService) {}

  ngOnInit() {}

  public onUpdate(proyectos: FormGroup) {
    this.servicio.insertProject(proyectos.get('name').value);
    //this.projects = environment.projects;
    this.urlProjects$ = this.servicio.listaObservable$;
    this.urlProjects$.pipe(share(),
      tap(() => (this.servicio.returnUrlList() as Project[]).forEach(pry => this.updateProjects(pry))))
    .subscribe();
    this.projects = this.projects;
  }

  private updateProjects(proyecto: Project) {
    this.servicio.actualizaProyectos();
    this.projects = environment.projects;
    this.projects.push(proyecto);
  }

  public onDelete(id: number) {
    this.servicio.deleteProject(id);
    this.projects = environment.projects;
  }

}
