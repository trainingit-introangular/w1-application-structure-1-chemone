import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links/links.component';
import { InfoComponent } from './about/info/info.component';
import { AuthorsComponent } from './about/authors/authors.component';
import { AutorComponent } from './about/authors/autor/autor.component';

@NgModule({
  declarations: [AboutComponent, LinksComponent, InfoComponent, AuthorsComponent, AutorComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
