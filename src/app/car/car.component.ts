import { Component, OnInit } from '@angular/core';
import {getCarService} from "../service/get-car.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Car } from '../modules/get-car';
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
 
    const { model,price,year } = this.form.value;
    console.log(this.form.value);
    this.carService.addCar(this.form.value)
    
  }
}