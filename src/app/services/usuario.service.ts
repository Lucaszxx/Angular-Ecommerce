import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../classes/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/usuarios";

  getUsuarios(): Observable<Usuarios[]> {
    return this._httpClient.get<Usuarios[]> (
      this.url)
  }
}
