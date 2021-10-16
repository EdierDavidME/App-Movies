import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
    freeMode: true,
    speed: 300,
    spaceBetween: -10,
    loop: true,
  };
  constructor() { }

  ngOnInit() {}

}
