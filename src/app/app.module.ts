import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IteratorsComponent } from './iterators/iterators.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'arrow', component: ArrowsComponent },
  { path: 'iterator', component: IteratorsComponent },

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
    IteratorsComponent
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
