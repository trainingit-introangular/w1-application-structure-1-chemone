import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes-component/heroes.component';

const routes: Routes = [
  { path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  { path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  { path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  { path: 'heroes',
    component: HeroesComponent
  },
  { path: 'not-found',
    component: NotFoundComponent
  },
  { path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
