import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TimetablesComponent } from './timetables/timetables.component';
import { Routes1Component } from './timetables/routes1.component';
import { Timetable1Component } from './timetables/timetable1.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
const appRoutes:Routes=[
{ path: '', component: HomeComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'tickets', component: TicketsComponent },
{ path: 'questions', component: QuestionsComponent },
{ path: 'timetables', component: TimetablesComponent },
{ path: 'routes1', component: Routes1Component },
{ path: 'timetable1', component: Timetable1Component },
];



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    ContactusComponent,
    HomeComponent,
    TicketsComponent,
    QuestionsComponent,
    TimetablesComponent,
    Routes1Component,
    Timetable1Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
