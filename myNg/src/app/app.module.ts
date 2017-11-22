import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRouter} from './app-router';
import { ElModule } from 'element-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';

// console.log(ElModule);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRouter,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
