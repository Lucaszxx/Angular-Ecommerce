import { Injectable } from '@angular/core';
import { Produtos } from '../classes/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: Produtos[] = [];
  
  adicionarAoCarrinho(produtos: Produtos) {
    this.itens.push(produtos);
    // window.alert("Item adicionado com sucesso!");
  }

  getItens() {
    return this.itens.filter((produto,
      contador) => this.itens.indexOf(produto) === contador);
  }

  limparCarrinho() {
    this.itens = [];
    return this.itens;
  }

  constructor() { }

}
