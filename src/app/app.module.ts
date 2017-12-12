import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { InfoComponent } from './basics/info/info.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import {FormsModule} from "@angular/forms";
import { ButtonsModule } from 'ngx-bootstrap';
import { BudgetComponent } from './basics/budget/budget.component';
import { ToggleComponent } from './basics/toggle/toggle.component';
import { TotalComponent } from './basics/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    InfoComponent,
    ChartsComponent,
    BudgetComponent,
    ToggleComponent,
    TotalComponent,
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
