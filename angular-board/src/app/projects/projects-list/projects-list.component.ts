import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects/models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];
  constructor() { }

  ngOnInit() {

  }

}
