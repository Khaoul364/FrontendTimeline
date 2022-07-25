import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { EventBoxComponent } from './event-box/event-box.component';
import { AddEventComponent } from './add-event/add-event.component';
import {FormsModule} from "@angular/forms";
import { ModulesBoxComponent } from './modules-box/modules-box.component';
import { AddModulesComponent } from './add-modules/add-modules.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CardComponent } from './card/card.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    CalendarComponent,
    FooterComponent,
    EventBoxComponent,
    AddEventComponent,
    ModulesBoxComponent,
    AddModulesComponent,
    AddTaskComponent,
    CardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
