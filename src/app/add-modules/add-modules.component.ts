import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../models/user";
import { ModulesService } from '../services/modules/modules.service';


@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.css']
})
export class AddModulesComponent implements OnInit {
//user!:UserModel;
userId= "62c7fda17a966e6112aa4429";

  constructor(private modulesService:ModulesService, private route:Router) { }

  ngOnInit(): void {
    //this.user= new UserModel()
  }

  addModules(f:any){
    f.ModulesCreator = this.userId;
    this.modulesService.addModules(f).subscribe(
      ()=>{
        this.route.navigate(['board']);
      }
    )
  }

}
