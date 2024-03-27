import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducts } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl:string = 'https://dummyjson.com/products'

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<iProducts>(this.apiUrl)
  }
}
