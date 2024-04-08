import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment.development';
import { iMovies } from './models/imovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl = environment.moviesUrl;
  movies: iMovies[]=[]
  movieSubj = new BehaviorSubject<iMovies[]>([]);
  $movie = this.movieSubj.asObservable()

  constructor(private http:HttpClient) {
    this.getAllMovies().subscribe(data=>{
      this.movieSubj.next(data)
      this.movies=data
    })
  }

  getAllMovies(){
    return this.http.get<iMovies[]>(this.moviesUrl)
  }

}
