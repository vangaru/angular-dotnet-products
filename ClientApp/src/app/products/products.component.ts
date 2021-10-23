import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  firstPage: number = 0;
  rowsPerPage: number = 1;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.setProducts();
  }

  private setProducts() {
    this._productService.getProducts().subscribe(
        (products) => this.products = products
      );
  }

}
