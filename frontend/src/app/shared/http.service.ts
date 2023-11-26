import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl=environment.apiUrl;
  constructor(private http: HttpClient) {}
  // baseUrl=environment.apiUrl;
  get(url:string) {
    return this.http.get(this.baseUrl+url);
  }

  // GetRequest(path: string) {
  //   const url = environment.api_url + '/' + path;
  //   const headers = this.createHeader();
  //   return this.http.get(url, { headers: headers }).pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       return new Observable(undefined);
  //     })
  //   );
  // }
}
