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
    const sceneLeft = $('#scene-left').get(0);
    const sceneMiddle = $('#scene-middle').get(0);
    const sceneRight = $('#scene-right').get(0);

    const parallaxSceneLeftInstance = new Parallax(sceneLeft);
    const parallaxSceneMiddleInstance = new Parallax(sceneMiddle);
    const parallaxSceneRightInstance = new Parallax(sceneRight);

  }

}
