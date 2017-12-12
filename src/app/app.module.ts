import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import {FormsModule} from "@angular/forms";
import { ButtonsModule } from 'ngx-bootstrap';
import { ProjectManageComponent } from './project-manage/project-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ProjectManageComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
