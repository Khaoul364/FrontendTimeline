import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventService} from "../services/events/event.service";
import {EventModel} from "../models/event";
import {Router} from "@angular/router";



@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.css']
})
export class EventBoxComponent implements OnInit {

  @Input() event!:EventModel;
  userId= "62c7fda17a966e6112aa4429";
  @Output() eventToDelete = new EventEmitter<EventModel>();



  constructor(private eventService:EventService, private route:Router) {
    }


  ngOnInit(): void {

    console.log('received  ', this.event)
  }

  deleteEvent(e:any){
    this.eventToDelete.emit(e);
    this.eventService.deleteEvent(e._id).subscribe(res =>{

    }, err=>{

    }, ()=>{
      this.eventToDelete.emit(e);
    });
  }




}
