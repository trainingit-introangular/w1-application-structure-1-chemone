import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes-component/heroes.component';

const routes: Routes = [
  {
    path: 'converter',
    loadChildren: './converter/converter.module#ConverterModule'
  },
  {
    path: 'car',
    loadChildren: './car/car.module#CarModule'
  },
  { path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
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
  { path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  { path: 'not-found',
    component: NotFoundComponent
  },
  { path: 'rates',
    loadChildren: './rates/rates.module#RatesModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsModule'
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
