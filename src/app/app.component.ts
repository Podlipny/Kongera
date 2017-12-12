import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  ngOnInit() {
    const scene = $('#scene').get(0);
    const parallaxInstance = new Parallax(scene);
    parallaxInstance.origin(0.5, 0);
  }

}
