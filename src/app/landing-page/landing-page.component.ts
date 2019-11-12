import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../mock-movies';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
movies = MOVIES;
  constructor() { }

  ngOnInit() {
  }

}