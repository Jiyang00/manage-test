import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BasicsComponent} from './basics/basics.component';
import {InfoComponent} from './basics/info/info.component';
import {ChartsComponent} from './charts/charts.component';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from "@angular/forms";
import {ButtonsModule, ModalModule, BsDatepickerModule} from 'ngx-bootstrap';
import {BudgetComponent} from './basics/budget/budget.component';
import {ToggleComponent} from './basics/toggle/toggle.component';
import {TotalComponent} from './basics/total/total.component';
import {EditComponent} from './edit/edit.component';
import {MemberComponent} from './member/member.component';
import {MemberTableComponent} from './member/member-table/member-table.component';
import {ProjectManageComponent} from './project-manage/project-manage.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicsComponent,
        InfoComponent,
        ChartsComponent,
        BudgetComponent,
        ToggleComponent,
        TotalComponent,
        EditComponent,
        MemberComponent,
        MemberTableComponent,
        ChartsComponent,
        ProjectManageComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule,
        FormsModule,
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
