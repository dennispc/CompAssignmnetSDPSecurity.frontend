import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute} from "@angular/router";
import {ProductDto} from "../shared/product.dto";

@Component({
  selector: 'app-inno-tech-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductDto | undefined;
  private id: number | undefined;

  constructor(private _service: ProductsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.loadProduct()
  }

  loadProduct(){
    this._service.getProductById(+this._activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;}, error => {
      console.log(error);
    })
  }

}
