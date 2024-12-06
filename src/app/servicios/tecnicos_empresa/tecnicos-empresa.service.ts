import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnicosEmpresaService {
  backend = environment.backend+"/profesional";

  constructor(private http: HttpClient) { }
  
  obtenerTecnicos(){
    return this.http.get(`${this.backend}/obtener-profesionales`);
  }
}