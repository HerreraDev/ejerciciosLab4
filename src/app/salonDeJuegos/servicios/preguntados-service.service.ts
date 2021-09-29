import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosServiceService {

  constructor(private http:HttpClient) { }

  public obtenerPaises(){
    return this.http.get('https://restcountries.com/v2/all');
  }

}
