import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TaskModel} from "../../models/task";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http:HttpClient) {


  }

  getAllModules(){
    return this.http.get('http://localhost:3000/modules/list');
  }

  

  deleteModules(id: any): Observable<any>{
    return this.http.delete('http://localhost:3000/modules/delete'+id)
  }

  addModules(e:any):Observable<any>{
    return this.http.post('http://localhost:3000/modules/add',e);
  }

  showModulesById(id: any):Observable<any>{
    return this.http.get('http://localhost:3000/modules/delete/'+id)
  }





}


