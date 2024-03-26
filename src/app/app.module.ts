import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routes } from './app-routing.module'
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
