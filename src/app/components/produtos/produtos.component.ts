import { Component, NgModule} from '@angular/core';

import { ProdutoService } from 'src/app/services/produto.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produtos } from 'src/app/classes/produtos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  nProdutos = 0

  constructor(
    private _produtoService: ProdutoService,
    private _carrinhoService: CarrinhoService
    ) {}
  public todosProdutos: Produtos[] = []; 
  // Filtro de pesquisa
  searchTerm!: string;
  // Get de todos os produtos
  ngOnInit() {
    this._produtoService.getProdutos()
    .subscribe(
      retorno => {
        this.todosProdutos = retorno.map(item => {
          return new Produtos(
            item.id,
            item.name,
            item.size,
            item.price,
            item.image,
            item.group,
          )
        })
      }
    );
  }

  adicionarAoCarrinho(produtos: Produtos) {
      this._carrinhoService.adicionarAoCarrinho(produtos);
      console.log(produtos);
  }

  successNotification() {
    Swal.fire({
      icon: 'success',
      title: 'Produto adicionado'
    })
  }
}


