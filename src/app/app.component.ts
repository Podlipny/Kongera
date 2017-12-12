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
    // const imacScene = $('#imacScene').get(0);
    // const logoScene = $('#logoScene').get(0);

    const parallaxPlantInstance = new Parallax(scene);
    // const parallaxImacInstance = new Parallax(imacScene);
    // const parallaxLogoInstance = new Parallax(logoScene);

  }

}
