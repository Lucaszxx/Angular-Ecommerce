import { Component} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Observable } from 'rxjs';

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
    })
  }


  // Valor total dos produtos no carrinho
  totalCarrinho: number = 0;
  total = this.items.map((item) => {
    let precoProduto = item.price;
    this.totalCarrinho = this.totalCarrinho + precoProduto;
  });

  // Delete produto de um carrinho
  deletar: boolean = false;
  deletarProduto(idProduto: number) {
    this.deletar = true;
    if (this.deletar == true) {
      this.items = this.items.filter(produto => produto.id != idProduto)
      // Atualização do preço total do carrinho
      this.totalCarrinho = 0;
      this.total = this.items.map((item) => {
        let precoProduto = item.price;
        this.totalCarrinho = this.totalCarrinho + precoProduto;
      });
    }
  }


  constructor(private _carrinhoService: CarrinhoService) {}
}
