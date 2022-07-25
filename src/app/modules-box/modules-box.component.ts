import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModulesService} from "../services/modules/modules.service";
import {ModulesModel} from "../models/modules";
import {Router} from "@angular/router";



@Component({
  selector: 'app-modules-box',
  templateUrl: './modules-box.component.html',
  styleUrls: ['./modules-box.component.css']
})
export class ModulesBoxComponent implements OnInit {

  @Input() modules!:ModulesModel;
  userId= "62c7fda17a966e6112aa4429";
  @Output() modulesToDelete = new EventEmitter <ModulesModel>();



  constructor(private modulesService:ModulesService, private route:Router) {
    }


  ngOnInit(): void {

    console.log('received  ', this.modules)
  }

  deleteModules(e:any){
    this.modulesToDelete.emit(e);
    this.modulesService.deleteModules(e._id).subscribe(res =>{

    }, err=>{

    }, ()=>{
      this.modulesToDelete.emit(e);
    });
  }




}
