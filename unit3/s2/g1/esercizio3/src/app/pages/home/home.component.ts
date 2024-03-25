import { Component } from '@angular/core';
import { ArticoliService } from '../../articoli.service';
import { iArticolo } from '../../modules/articolo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  articleArr:iArticolo[] =[]
  randomArray:iArticolo[] = []

  constructor(private articoliSvc:ArticoliService){}

  ngOnInit(){
    this.articoliSvc.getAllArticles().then(res => {
      this.articleArr = res
      this.generateRandomArray()
    })
  }


  generateRandomArray(){
    for(let i = 0; i < 4; i++){
      let index:number = Math.floor(Math.random() * this.articleArr.length)
      this.randomArray.push(this.articleArr[index])
    }
  }
}
