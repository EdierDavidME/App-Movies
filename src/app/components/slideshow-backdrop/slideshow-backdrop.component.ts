import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.3,
    freeMode: true,
    speed: 300,
    spaceBetween: 8,
    loop: true,
  };

  constructor() {}

  ngOnInit() {}
}
