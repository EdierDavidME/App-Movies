import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private moviesService: MoviesService) {}
  peliculasNuevas: Pelicula[] = [];
  populares: Pelicula[] = [];

  ngOnInit() {
    this.moviesService.getFeature().subscribe((res) => {
      // console.log('AWS', res.results);
      this.peliculasNuevas = res.results;
    });

    this.moviesService.getPopulares().subscribe((res) => {
      console.log('Populares', res);
      this.populares = res.results;
    });
  }
}
