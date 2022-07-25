import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./calendar/calendar.component";
import {EventBoxComponent} from "./event-box/event-box.component";
import {AddEventComponent} from "./add-event/add-event.component";
import { ModulesBoxComponent } from './modules-box/modules-box.component';
import { AddModulesComponent } from './add-modules/add-modules.component';
import {AddTaskComponent} from './add-task/add-task.component';
import { CardComponent } from './card/card.component';



const routes: Routes = [
  {path:'calendar', component:CalendarComponent},
  {path:'calendar/add', component:AddEventComponent},
  {path:'modules/add', component:AddModulesComponent},
  {path:'task/add', component:AddTaskComponent},
  {path:'card', component:CardComponent},
  {path:'modules/box', component:ModulesBoxComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
