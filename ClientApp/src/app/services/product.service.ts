import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productsUrl = "/api/products";

  constructor(private _httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this._httpClient.get<Product>(`${this._productsUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(this._productsUrl, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this._httpClient.put(this._productsUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this._httpClient.delete<Product>(`${this._productsUrl}/${id}`);
  }
}
