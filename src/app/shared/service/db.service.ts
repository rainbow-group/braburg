import { Injectable } from '@angular/core';
import {apiBaseUrls} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = apiBaseUrls.dsBaseUrl + apiBaseUrls.rainbowDataEndpoint;
  constructor(private http: HttpClient) { }

  getProdCategories(): Observable<any>{
    return this.http.get(`${this.dbUrl}/prod/categories`);
  }
}
