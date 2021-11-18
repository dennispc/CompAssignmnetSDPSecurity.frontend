import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ProductDto} from './product.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private _http: HttpClient) {}

  getAll(): Observable<ProductDto[]> {
    return this._http
      .get<ProductDto[]>(environment.api + '/api/Product');
  }

  getAllTest() {

    return [
      {id: 1, name: "test"},
    ]
  }
}
