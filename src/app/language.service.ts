import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LanguageService {

  constructor(private http: HttpClient) { }

  loadLanguageResource(language: string): Observable<any> {
    return this.http.get('../resources/' + language + '.json');
  }
}
