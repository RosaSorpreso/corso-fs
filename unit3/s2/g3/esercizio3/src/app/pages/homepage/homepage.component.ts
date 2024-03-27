import { Component } from '@angular/core';
import { iProduct } from '../../models/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  products:iProduct[] = []

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(products => this.products = products.products)
  }
}
