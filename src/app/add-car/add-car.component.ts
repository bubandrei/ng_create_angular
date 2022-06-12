import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output() addCarItem = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('newYear') newYear!: ElementRef;

  addCar(newName: HTMLInputElement) {
    this.addCarItem.emit({
      name: newName.value,
      year: +this.newYear.nativeElement.value
    })
    newName.value = '';
    this.newYear.nativeElement.value = 2017;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
