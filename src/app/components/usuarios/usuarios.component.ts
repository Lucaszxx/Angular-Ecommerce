import { Component } from '@angular/core';

import { Usuarios } from 'src/app/classes/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  
  constructor(private _usuarioService: UsuarioService) {}
  public usuarios: Usuarios[] = [];

  ngOnInit() {
    this._usuarioService.getUsuarios() 
      .subscribe(
        retorno => {
          this.usuarios = retorno.map(item => {
          return new Usuarios(
            item.id,
            item.nome,
            item.sobrenome,
            item.cpf,
            item.email,
            item.sexo,
            item.dataCad
          )
        })
      }
    )
  }
}
