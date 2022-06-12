import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']

})
export class CarComponent {

  // @Input()
  // carItem!: { name: String; year: Number; };
  @Input('carItem') car!: { name: String; year: Number; };

}

