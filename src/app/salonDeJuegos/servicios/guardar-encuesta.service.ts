import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class GuardarEncuestaService {

  resultadosEncuestasAhorcado!: Encuesta[];
  resultadosEncuestasMayorMenor!: Encuesta[];
  resultadosEncuestasPreguntados!: Encuesta[];
  resultadosEncuestasAhorcadoCasaDeApuestas!: Encuesta[];

  constructor(private firestore: AngularFirestore) { }

  async guardarEncuesta(usuario:string, formValue:any, juego:string){
    let informacion = {...formValue};
    informacion.usuario = usuario;
    informacion.fechaHora = (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss');
    informacion.juego = juego;

    let newId = this.firestore.createId();
    await this.firestore.collection("encuestas").doc(newId).set(informacion);
  }

  async getEncuestasAhorcado(){
    var resultado: Encuesta;
    this.resultadosEncuestasAhorcado = new Array<Encuesta>();
    let resRef = this.firestore.collection("encuestas").ref.where("juego", "==", "Ahorcado")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as Encuesta;
       this.resultadosEncuestasAhorcado.push(resultado);
     }));
  };

  async getEncuestasMayorMenor(){
    var resultado: Encuesta;
    this.resultadosEncuestasMayorMenor = new Array<Encuesta>();
    let resRef = this.firestore.collection("encuestas").ref.where("juego", "==", "Mayor y Menor")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as Encuesta;
       this.resultadosEncuestasMayorMenor.push(resultado);
     }));
  };

  async getEncuestasCasaApuestas(){
    var resultado: Encuesta;
    this.resultadosEncuestasAhorcadoCasaDeApuestas = new Array<Encuesta>();
    let resRef = this.firestore.collection("encuestas").ref.where("juego", "==", "Casa de Apuestas")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as Encuesta;
       this.resultadosEncuestasAhorcadoCasaDeApuestas.push(resultado);
     }));
  };

  async getEncuestasPreguntados(){
    var resultado: Encuesta;
    this.resultadosEncuestasPreguntados = new Array<Encuesta>();
    let resRef = this.firestore.collection("encuestas").ref.where("juego", "==", "Preguntados")
    
     await resRef.get()
     .then(res => res.forEach(resDoc => {
        resultado = resDoc.data() as Encuesta;
       this.resultadosEncuestasPreguntados.push(resultado);
     }));
  };
}
