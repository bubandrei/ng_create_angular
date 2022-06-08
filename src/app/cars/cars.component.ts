import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // canAddCar: boolean = false;
  addCarStatus = '';
  inputText = 'Default text';

  constructor() {
    // setTimeout(() => {
    //   this.canAddCar = !this.canAddCar;
    // },4000)
  }
  addCar() {
    this.addCarStatus = "Car added";
  };
  // onKeyUp(value: string) {
  //   this.inputText = value;
  // };
    onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }


}
