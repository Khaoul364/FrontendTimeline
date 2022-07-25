import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TaskModel} from "../../models/task";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) {


  }

  getAllTask(){
    return this.http.get<any>('http://localhost:3000/task/list');
  }



  deleteTask(id: any): Observable<any>{
    return this.http.delete('http://localhost:3000/task/delete/'+id)
  }

  addTask(e:any):Observable<any>{
    return this.http.post('http://localhost:3000/task/add/',e);
  }

  showTaskById(id: any):Observable<any>{
    return this.http.get('http://localhost:3000/task/delete/'+id)
  }





}


