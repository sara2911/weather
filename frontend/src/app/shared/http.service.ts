import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl=environment.apiUrl;
  constructor(private http: HttpClient) {}
  get(url:string) {
    return this.http.get(this.baseUrl+url);
  }
}
