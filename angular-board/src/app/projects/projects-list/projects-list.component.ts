import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/core/projects.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];
  @Output() public delete = new EventEmitter();
  public urlProjects$: Observable<Project[]>;

  constructor(private servicio: ProjectsService) { }

  ngOnInit() {
      this.projects = [];
      for (const proyecto of environment.projects){
        const project: Project = {
          id: proyecto.id,
          name: proyecto.name
        };
        this.projects.push(project);
      }
      this.urlProjects$ = this.servicio.listaObservable$;
      this.urlProjects$.pipe(tap(() => (this.servicio.returnUrlList() as Project[]).forEach(proy => this.projects.push(proy)))).subscribe();
  }
}
