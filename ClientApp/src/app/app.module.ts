import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {TableModule} from "primeng/table";
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import {KeyFilterModule} from "primeng/keyfilter";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddProductFormComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        //TableModule,
        RouterModule.forRoot([
            {path: '', component: ProductsComponent, pathMatch: 'full'},
            {path: 'product-details/:id', component: ProductDetailsComponent}
        ]),
        TableModule,
        DataViewModule,
        ButtonModule,
        InputTextModule,
        KeyFilterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
