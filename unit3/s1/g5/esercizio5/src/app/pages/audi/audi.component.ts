import { AutoService } from '../../auto.service';
import { iCar } from './../../models/i-car';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  audiCars:iCar[] = []

  constructor(private carsSvc:AutoService){}

  ngOnInit(){
    this.carsSvc.getAudiCars()
    .then(res => this.audiCars = res)
  }
}
