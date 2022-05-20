import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmloyeeServiceService } from './services/emloyee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public employee!:Employee[];

  constructor(private EmployeeService:EmloyeeServiceService){}

  public getEmployees(){
    this.EmployeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employee = response; 
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
