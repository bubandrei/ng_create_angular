import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']

})
export class CarComponent {

  @Input()
  carItem!: { name: String; year: Number; };

}
function carItem(carItem: any) {
  throw new Error('Function not implemented.');
}

