import { iCar } from '../../models/i-car';
import { Component } from '@angular/core';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cars:iCar[] = []
  inEvidenceCars:iCar[] = []

  constructor(private carsSvc:AutoService){}

  ngOnInit(){
    this.carsSvc.getAllCars()
    .then(cars => {
      this.cars = cars
      this.generateRandomCars()
    })
  }

  generateRandomCars():void{
    for (let i = 0; i < 2; i++) {
      let index:number = Math.floor(Math.random() * this.cars.length)
      this.inEvidenceCars.push(this.cars[index])
    }
  }
}
