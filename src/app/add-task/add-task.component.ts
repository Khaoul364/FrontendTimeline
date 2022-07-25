import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../models/user";
import {TaskService } from '../services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
//user!:UserModel;
userId= "62c7fda17a966e6112aa4429";

  constructor(private taskService:TaskService, private route:Router) { }

  ngOnInit(): void {
    //this.user= new UserModel()
  }

  addTask(f:any){
    f.ModulesCreator = this.userId;
    this.taskService.addTask(f).subscribe(
      ()=>{
        this.route.navigate(['board']);
      }
    )
  }

}
