import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.setProduct();
  }

  private setProduct() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._productService
      .getProduct(id)
      .subscribe(
        (product) => this.product = product);
  }

  goBack() {
    this._location.back();
  }

  updateProduct() {
    this._productService
      .updateProduct(this.product)
      .subscribe();
    this.goBack();
  }
}
