import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(message: Message): Observable<any> {
    return this.http.post(environment.serverPath + '/contact', message, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
   });
  }
}
