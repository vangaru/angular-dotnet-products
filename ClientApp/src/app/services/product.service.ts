import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = "/api/products";

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.productsUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.productsUrl, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(this.productsUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.productsUrl}/${id}`);
  }
}
