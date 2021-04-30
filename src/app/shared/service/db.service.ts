import {Injectable} from '@angular/core';
import {apiBaseUrls} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = apiBaseUrls.dsBaseUrl + apiBaseUrls.rainbowDataEndpoint;

  cachedCategories;
  cachedProds: any = {};
  cachedProdDetail: any = {};

  constructor(private http: HttpClient) {
  }

  getProdCategories(): Observable<any> {
    if (this.cachedCategories) {
      return of(this.cachedCategories);
    } else {
      return this.http.get(`${this.dbUrl}/prod/categories`).pipe(
        map(data => {
          this.cachedCategories = data;
          return data;
        })
      );
    }
  }

  getProdListByCategory(categoryId): Observable<any> {
    if (this.cachedProds[categoryId]) {
      return of(this.cachedProds[categoryId]);
    } else {
      return this.http.get(`${this.dbUrl}/prod/list/${categoryId}`).pipe(
        map(data => {
          this.cachedProds[categoryId] = data;
          return data;
        })
      );
    }
  }

  getProdByPid(productId): Observable<any> {
    if (this.cachedProdDetail[productId]) {
      return of(this.cachedProdDetail[productId]);
    } else {
      return this.http.get(`${this.dbUrl}/prod/${productId}`).pipe(
        map(data => {
          this.cachedProdDetail[productId] = data;
          return data;
        })
      );
    }
  }
}
