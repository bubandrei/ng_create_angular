import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  @Output() addCarItem = new EventEmitter<{ name: string, year: number }>()

  addCar() {
    this.addCarItem.emit({
      name: this.carName,
      year: this.carYear
    })
    this.carName = '';
    this.carYear = 2017;
  }

  constructor() { }

  ngOnInit(): void {
  }

}