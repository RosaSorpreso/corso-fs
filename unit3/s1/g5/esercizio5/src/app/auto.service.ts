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
    .then(res => res.filter(c => c.brand === 'Fiat'))
  }

  getFordCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(c => c.brand === 'Ford'))
  }

  getAudiCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(c => c.brand === 'Audi'))
  }

  getAutoById(id:string):Promise<iCar | undefined>{
    return this.getAllCars()
    .then(res => res.find(c => c.id == id))
  }
}
