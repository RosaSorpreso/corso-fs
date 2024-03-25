import { Component } from '@angular/core';
import { iArticolo } from '../../modules/articolo';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {
  articleArr:iArticolo[] = []

  constructor(private articleSvc:ArticoliService){}

  ngOnInit(){
    this.articleSvc.getActiveArticle().then(res => {
      this.articleArr = res
    })
  }
}
