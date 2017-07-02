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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'arrows', component: ArrowsComponent },
  { path: 'iterators', component: IteratorsComponent },
  { path: 'generators', component: GeneratorsComponent },
  { path: 'spread', component: SpreadComponent },
  { path: 'rest', component: RestComponent },

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
    RestComponent
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
