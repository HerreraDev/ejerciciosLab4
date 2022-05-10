import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';
import { ResultadosMayorMenor, ResultadosAhorcado, ResultadosCasaDeApuestas, ResultadosPreguntados } from '../clases/resultados';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

    resultadosAhorc!: ResultadosAhorcado[]; 
    resultadosMayorMenor!: ResultadosMayorMenor[]; 
    resultadosPreguntados!: ResultadosPreguntados[]; 
    resultadosCasaApuestas!:ResultadosCasaDeApuestas[];
  constructor(private firestore: AngularFirestore) { }


  async getResultadosAhorcado(){
    var fallox = 0;
    var resultado: ResultadosAhorcado;
    this.resultadosAhorc = new Array<ResultadosAhorcado>();
    let resRef = this.firestore.collection("puntuaciones").ref.where("juego", "==", "Ahorcado")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as ResultadosAhorcado;
       this.resultadosAhorc.push(resultado);
     }));
  };

  async getResultadosMayorMenor(){
    var fallox = 0;
    var resultado: ResultadosMayorMenor;
    this.resultadosMayorMenor = new Array<ResultadosMayorMenor>();
    let resRef = this.firestore.collection("puntuaciones").ref.where("juego", "==", "Mayor y menor")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as ResultadosMayorMenor;
       this.resultadosMayorMenor.push(resultado);
     }));
  };

  async getResultadosPreguntados(){
    var fallox = 0;
    var resultado: ResultadosPreguntados;
    this.resultadosPreguntados = new Array<ResultadosPreguntados>();
    let resRef = this.firestore.collection("puntuaciones").ref.where("juego", "==", "Preguntados")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as ResultadosPreguntados;
       this.resultadosPreguntados.push(resultado);
     }));
  };

  async getResultadosCasaApuestas(){
    var fallox = 0;
    var resultado: ResultadosCasaDeApuestas;
    this.resultadosCasaApuestas = new Array<ResultadosCasaDeApuestas>();
    let resRef = this.firestore.collection("puntuaciones").ref.where("juego", "==", "Casa de apuestas")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as ResultadosCasaDeApuestas;
       this.resultadosCasaApuestas.push(resultado);
     }));
  };

  
}
