import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  fordCars:iCar[] = []

  constructor(private carsSvc:AutoService){}

  ngOnInit(){
    this.carsSvc.getFordCars()
    .then(res => this.fordCars = res)
  }
}
