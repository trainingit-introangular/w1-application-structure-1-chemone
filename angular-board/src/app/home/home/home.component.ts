import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public header = 'Proyectos';
  public description = 'Gestiona tus proyectos';
  public numProjects: number;
  public counterClass = 'tag secondary';

  constructor() { }

  ngOnInit() {
    this.numProjects = environment.projects.length;
  }

}
