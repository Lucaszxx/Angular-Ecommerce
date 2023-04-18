import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProdutosComponent } from "./components/produtos/produtos.component";
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";
import { MinhaContaComponent } from "./components/minha-conta/minha-conta.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: '', component: ProdutosComponent},
    { path: 'carrinho', component: CarrinhoComponent},
    { path: 'minhaConta', component: MinhaContaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}