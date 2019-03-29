import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    return this.http.get<Usuario>(environment.urlObtenerUsuario + "/" + id);
  }
}
