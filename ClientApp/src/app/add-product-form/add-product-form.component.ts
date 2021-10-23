import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  name: string;
  company: string;
  price: number;

  constructor() { }

  ngOnInit() {
  }

  onAddProduct() {
    const newProduct = this.createProduct();
    this.addProduct.emit(newProduct);
    this.clearForm();
  }

  private createProduct(): object {
      return {
        name: this.name,
        company: this.company,
        price: this.price
      }
  }

  private clearForm() {
    this.name = '';
    this.company = '';
    this.price = null;
  }
}
