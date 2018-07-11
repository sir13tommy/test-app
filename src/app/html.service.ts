import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  private defaultUrl = 'https://www.google.com'

  constructor(
    private http: HttpClient
  ) { }

  get (url): Observable<Object> {
    if (!url) {
      url = this.defaultUrl
    }
    return this.http.get(url)
  }
}
