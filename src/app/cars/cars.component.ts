// import { style } from "@angular/animations";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // encapsulation: ViewEncapsulation.None

})

export class CarsComponent {


  cars = [{
    name: 'Honda',
    year: 2018
  }, {
    name: 'Toyota',
    year: 2020
  }, {
    name: 'Geely',
    year: 2022
  }]

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }
  constructor() {

  }
}
