import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

constructor(private http: HttpClient) { }

timeStampRequest(param: string) {
  return this.http.get('http://localhost:55234/api/timestamp/convert/' + param );
}
}
