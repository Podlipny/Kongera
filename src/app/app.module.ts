import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RouterComponent } from './router.component';

import { MailService } from './mail.service';
import { LanguageService } from './language.service';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: ':lang', component: AppComponent }
];

@NgModule({
  declarations: [
    RouterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MailService, LanguageService ],
  bootstrap: [ RouterComponent ],
})
export class AppModule { }
