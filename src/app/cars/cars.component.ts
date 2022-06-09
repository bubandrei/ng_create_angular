import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // canAddCar: boolean = false;
  // addCarStatus = '';
  // inputText = 'Default text';
  carName = '';
  addCarStatus = false;
  cars: [string, string, string] = ['Ford', 'Audi', 'BMW'];
  // items = [{ id: 0, name: 111 }, { id: 2, name: 222 }, { id: 33, name: 333 }]
  items = [
    new Date(2022, 5, 4),
    new Date(2023, 6, 5),
    new Date(2024, 7, 6),
  ]

  constructor() {
    // setTimeout(() => {
    //   this.canAddCar = !this.canAddCar;
    // },4000)
  }
  // addCar() {
  //   this.addCarStatus = "Car added";
  // };
  // onKeyUp(value: string) {
  //   this.inputText = value;
  // };
  //   onKeyUp(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  };
  setBigText(car:string) {
    return car.length > 2 ? true : false;
  }

}
