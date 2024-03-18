import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  slides = [
    'assets/img/universities/1.png',
    'assets/img/universities/2.png',
    'assets/img/universities/4.png',
    'assets/img/universities/5.png',
    'assets/img/universities/3.png',
    'assets/img/universities/6.png',
    'assets/img/universities/7.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
