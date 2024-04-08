import { Component } from '@angular/core';
import { iMovies } from '../../models/imovies';
import { MoviesService } from '../../movies.service';
import { AuthService } from '../auth/auth.service';
import { iUser } from '../../models/iuser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  movies: iMovies[] = [];
  user: iUser | undefined;

  constructor(
    private movieSvc: MoviesService,
    private authSvc: AuthService) {}

  ngOnInit(){
    this.movieSvc.$movie.subscribe(movies => {
      this.movies = movies;
    });
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    });
  }

}
