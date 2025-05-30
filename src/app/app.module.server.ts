import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
