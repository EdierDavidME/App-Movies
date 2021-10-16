import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
    freeMode: true,
    speed: 300,
    spaceBetween: 8,
    loop: true,
  };
  constructor() { }

  ngOnInit() {}

}
