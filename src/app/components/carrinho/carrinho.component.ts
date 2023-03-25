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

  //Quantidade total e valor total de um Produto  
  

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
      // Atualização do preço total dos carrinhos
      this.totalCarrinho = 0;
      this.total = this.items.map((item) => {
        let precoProduto = item.price;
        this.totalCarrinho = this.totalCarrinho + precoProduto;
      });
    }
  }


  constructor(private _carrinhoService: CarrinhoService) {}
}
