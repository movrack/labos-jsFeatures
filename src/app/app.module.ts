import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IteratorsComponent } from './iterators/iterators.component';
import { GeneratorsComponent } from './generators/generators.component';
import { SpreadComponent } from './spread/spread.component';
import { RestComponent } from './rest/rest.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'arrows', component: ArrowsComponent },
  { path: 'spread', component: SpreadComponent },
  { path: 'rest', component: RestComponent },
  { path: 'destructuring', component: DestructuringComponent },
  { path: 'iterators', component: IteratorsComponent },
  { path: 'generators', component: GeneratorsComponent },
  { path: 'promises', component: PromiseComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'asyncAwait', component: AsyncAwaitComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ArrowsComponent,
    HomeComponent,
    IteratorsComponent,
    GeneratorsComponent,
    SpreadComponent,
    RestComponent,
    DestructuringComponent,
    PromiseComponent,
    ObservablesComponent,
    AsyncAwaitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
