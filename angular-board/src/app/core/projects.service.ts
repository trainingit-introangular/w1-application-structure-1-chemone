import { Injectable } from '@angular/core';
import { Project } from '../projects/projects/models/project';
import { environment } from 'src/environments/environment';
import { ProjectCrud } from '../projects/projects/models/projectCrud';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements ProjectCrud {
  projectList: Project[];
  public listaObservable$: Observable<Project[]> = null;

  constructor(private httpClient: HttpClient) {
    this.actualizaProyectos();
  }

  public actualizaProyectos(){
    this.projectList = [];
    this.listaObservable$ = this.httpClient.get<Project[]>('https://api-base.herokuapp.com/api/pub/projects').pipe(
      share(),
      tap(proyectos => this.vaciaYRellenaCon(proyectos)));
  }

  private vaciaYRellenaCon(proyectos: Project[]) {
    if (proyectos != undefined && proyectos.length > 0) {
      this.projectList.splice(0);
      proyectos.forEach(p => this.projectList.push(p));
    }
}

  public insertProject(projectname: string) {
    const projetToAdd: Project = {id: environment.projects.length + 1, name: projectname };
    environment.projects.push({...projetToAdd});
    this.httpClient.post('https://api-base.herokuapp.com/api/pub/projects', projetToAdd).subscribe();
  }

  public editChanges(project: Project) {
    environment.projects.filter(c => c.id == project.id)[0].name = project.name;
    window.history.back();
  }

  public deleteProject(id: number){
    const ind = environment.projects.findIndex(c => c.id == id);
    environment.projects.splice(ind, 1);
  }

  public filterProject(id: number){
    return environment.projects.filter(c => c.id == id)[0];
  }

  public returnUrlList() {
    return this.projectList;
  }


  public clearProjectsUrl(){
    this.httpClient.delete('https://api-base.herokuapp.com/api/pub/projects').subscribe();
  }

}
