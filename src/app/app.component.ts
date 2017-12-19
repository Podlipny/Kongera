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
    const sceneLeft2 = $('#scene-left2').get(0);
    const sceneRight = $('#scene-right').get(0);

    const parallaxSceneLeftInstance = new Parallax(sceneLeft);
    const parallaxSceneLeftInstance2 = new Parallax(sceneLeft2);

    const parallaxSceneRightInstance = new Parallax(sceneRight);

  }

}
