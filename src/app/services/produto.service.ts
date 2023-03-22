import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../classes/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/products";

  getProdutos(): Observable<Produtos[]> {
    return this._httpClient.get<Produtos[]> (
      this.url)
  }

}
