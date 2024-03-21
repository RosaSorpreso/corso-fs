import { Component } from '@angular/core';
import { iArticolo } from '../../modules/articolo';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-non-active',
  templateUrl: './non-active.component.html',
  styleUrl: './non-active.component.scss'
})
export class NonActiveComponent {
  articleArr:iArticolo[] = []

  constructor(private articleSvc:ArticoliService){}

  ngOnInit(){
    this.articleSvc.getNonActiveArticle().then(res => {
      this.articleArr = res
    })
  }
}
