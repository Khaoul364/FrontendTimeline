import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EventModel} from "../../models/event";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {


  }
/*
  getAllEvents(){
    return this.http.get('http://localhost:3000/events/list');
  }*/

  showEventsByWeek(date: any): Observable<EventModel[]>{
    return this.http.get<EventModel[]>('http://localhost:3000/events/show/week/'+date)
  }

  deleteEvent(id: any): Observable<any>{
    return this.http.delete('http://localhost:3000/events/delete/'+id)
  }

  addEvent(e:any):Observable<any>{
    return this.http.post('http://localhost:3000/events/add/',e);
  }

  showEventById(id: any):Observable<any>{
    return this.http.get('http://localhost:3000/events/delete/'+id)
  }





}


