import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carYear = 2017;
  @Output() addCarItem = new EventEmitter<{ name: string, year: number }>()

  addCar(newName: HTMLInputElement) {
    this.addCarItem.emit({
      name: newName.value,
      year: this.carYear
    })
    newName.value = '';
    this.carYear = 2017;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
