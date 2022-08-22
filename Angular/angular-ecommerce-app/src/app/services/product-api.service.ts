import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {
    this.getProduct().subscribe((data) => {
      console.log(data);
    });
  }

  public getProduct(): Observable<any> {
    return this.http.get('./assets/productData.json');
  }
}
