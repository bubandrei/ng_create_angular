// import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']

})

export class CarsComponent {
  carName = '';
  carYear = 2017;

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

  addCar() {
    this.cars.push({ name: this.carName, year: this.carYear });
    this.carName = '';
    // this.carYear = 2017;
  }
  constructor() {

  }
}
