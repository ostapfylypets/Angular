import { Component, OnInit } from '@angular/core';
import {getCarService} from "../service/get-car.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

form:FormGroup;
  constructor(private carService:getCarService ,private http:HttpClientModule ,private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initCarForm()
  };

  initCarForm(): void {
    this.form = this.fb.group({ price: [null],
      model: [null],
      year:[null]
    })
  }
  addCar():void{
 
    const Car=this.form.value;
  
    console.log(Car);
    this.carService.addCar(Car).
    subscribe(
      error => {
        console.log(error);
      }
    )
    
  }
}