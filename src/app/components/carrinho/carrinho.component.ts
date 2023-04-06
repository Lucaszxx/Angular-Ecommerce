import { Component} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  // Get dos produtos
  items = this._carrinhoService.getItens(); 

  // Quantidade de produto
  // Aumentar quantidade de um produto
  aumentarQuantidadeProduto(idProduto: number) {
    const itemAlterado = this.items.map((item) => {
      if (item.id === idProduto) {
        item.quanty = item.quanty + 1; 
        this.handleAtualizarCarrinho()
      }
    })
  }

  // Diminuir a quantidade de um produto
  diminuirQuantidadeProduto(idProduto: number) {
    const itemAlterado = this.items.map((item) => {
      if (item.id === idProduto) {
        item.quanty = item.quanty - 1;
        if (item.quanty < 1) {
          item.quanty = 1
        }
      }
      this.handleAtualizarCarrinho()
    })
  }

  // Valor total dos produtos no carrinho
  totalCarrinho: number = 0;
  total = this.items.map((item) => {
    let precoProduto = item.price;
    this.totalCarrinho = this.totalCarrinho + (precoProduto * item.quanty);
  });

  // Função para atualizar preço do carrinho quando for alterada a quantidade de produtos
  handleAtualizarCarrinho() {
    this.totalCarrinho = 0;
    let total = this.items.map((item) => {
      let precoProduto = item.price;
      this.totalCarrinho = this.totalCarrinho + (precoProduto * item.quanty);
    });
  }

  // Delete produto de um carrinho
  deletar: boolean = false;
  deletarProduto(idProduto: number) {
    this.deletar = true;
    if (this.deletar == true) {
      this.items = this.items.filter(produto => produto.id != idProduto)
      // Atualização do preço total do carrinho
      this.totalCarrinho = 0;
      let total = this.items.map((item) => {
        let precoProduto = item.price;
        this.totalCarrinho = this.totalCarrinho + precoProduto;
      });
    }
  }

  constructor(private _carrinhoService: CarrinhoService) {}
}
