import { Injectable } from '@angular/core';
import { iCar } from './models/i-car';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  getAllCars():Promise<iCar[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iCar[]) => res)
  }

  getFiatCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Fiat'))
  }

  getFordCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Ford'))
  }

  getAudiCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Audi'))
  }
}
