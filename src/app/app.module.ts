import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionesComponent } from './estaciones/estaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    EstacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
