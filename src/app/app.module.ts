import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { InfoComponent } from './basics/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
