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

    // Evento para capturar a quantidade do produto selecionado 
    quantidadeDesejada = 1;
    quantidade(e: Event): any{
      const target = e.target as HTMLInputElement;
      const value = target.value;
      this.quantidadeDesejada = parseInt(value);
      console.log(this.quantidadeDesejada)
    }
  
  // Valor total dos produtos no carrinho
  totalCarrinho: number = 0;
  total = this.items.map((item) => {
    let precoProduto = item.price;
    this.totalCarrinho = this.totalCarrinho + precoProduto;
  });

  constructor(private _carrinhoService: CarrinhoService) {}
}
