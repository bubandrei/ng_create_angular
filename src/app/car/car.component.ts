import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  // templateUrl: './car.component.html',
  template: `
  <div>My favorite car</div>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio officia corporis, deleniti modi aliquam cumque odit magni tempora nemo mollitia iusto facere reprehenderit saepe exercitationem esse minus quod iste.</h3>
  `,
  // styleUrls: ['./car.component.css']
  styles: [`
  h3{
    color: coral
  }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
