import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import $ from 'jquery';
import Parallax from 'parallax-js';

import { MailService } from './mail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  contactForm: FormGroup;

  constructor(private mailService: MailService, private fb: FormBuilder) {
    this.contactForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.compose([
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{9,14}$/)])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email ])],
      'message': [null, Validators.required]
    });
  }

  ngOnInit() {
    const sceneLeft = $('#scene-left').get(0);
    const sceneMiddle = $('#scene-middle').get(0);
    const sceneRight = $('#scene-right').get(0);

    const parallaxSceneLeftInstance = new Parallax(sceneLeft);
    const parallaxSceneMiddleInstance = new Parallax(sceneMiddle);
    const parallaxSceneRightInstance = new Parallax(sceneRight);
  }

  ScroolOnClick(elementClass: string) {
    document.querySelector('#' + elementClass).scrollIntoView({
      behavior: 'smooth'
    });
  }

  submitContact(message) {
    console.log(message);
  }
}
