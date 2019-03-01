import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styles: []
})
export class AutorComponent implements OnInit {

  public authorId = '';
  constructor(activateRoute: ActivatedRoute) {
  this.authorId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {}

}
