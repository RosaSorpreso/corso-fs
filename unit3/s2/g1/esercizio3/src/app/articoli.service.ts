import { Injectable } from '@angular/core';
import { iArticolo } from './modules/articolo';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoliArr:iArticolo[] = []

  getAllArticles():Promise<iArticolo[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res: {posts:iArticolo[]}) => {
      this.articoliArr = res.posts
      return this.articoliArr
    })
  }

  getActiveArticle():Promise<iArticolo[]>{
    return this.getAllArticles()
    .then(res => res.filter(a => a.active))
  }

  getNonActiveArticle():Promise<iArticolo[]>{
    return this.getAllArticles()
    .then(res => res.filter(a => !a.active))
  }
}
