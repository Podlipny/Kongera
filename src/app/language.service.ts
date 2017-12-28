import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { IResource } from './IResource';

@Injectable()
export class LanguageService {

  constructor(private http: HttpClient) { }

  loadLanguageResource(language: string): Observable<IResource> {
    return this.http.get<IResource>('../resources/' + language + '.json');
  }
}
