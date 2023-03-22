import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { RegisterComponent } from "./components/register/register.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'minhaConta', component:UsuariosComponent},
    { path: '', component: ProdutosComponent},
    { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}