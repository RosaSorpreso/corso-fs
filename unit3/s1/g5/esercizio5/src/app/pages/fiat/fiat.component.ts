import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  fiatCars:iCar[] = []

  constructor(private carsSvc:AutoService){}

  ngOnInit(){
    this.carsSvc.getFiatCars()
    .then(res => this.fiatCars = res)
  }
}
