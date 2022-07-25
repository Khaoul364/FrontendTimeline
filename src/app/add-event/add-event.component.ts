import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/events/event.service";
import {Router} from "@angular/router";
import {UserModel} from "../models/user";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
//user!:UserModel;
userId= "62c7fda17a966e6112aa4429";

  constructor(private eventService:EventService, private route:Router) { }

  ngOnInit(): void {
    //this.user= new UserModel()
  }

  addEvent(f:any){
    f.eventCreator = this.userId;
    this.eventService.addEvent(f).subscribe(
      ()=>{
        this.route.navigate(['calendar']);
      }
    )
  }

}
