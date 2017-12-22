import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';

import { environment } from '../environments/environment';

export interface ResetMessage {
  message: string;
}

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(message: Message) {
    this.http.post(environment.serverPath + '/contact', message).subscribe(res => {
    });
  }
}
