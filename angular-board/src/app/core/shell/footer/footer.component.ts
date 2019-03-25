import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RequestStoreService } from 'src/app/projects/request-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  mensaje: string;

  constructor(notificaciones: RequestStoreService) {
    notificaciones.select$().pipe(tap(m => this.mensaje = m)).subscribe();
  }

  ngOnInit() {
  }

}
