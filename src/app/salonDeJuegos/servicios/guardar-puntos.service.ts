import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GuardarPuntosService {

  constructor(private firestore: AngularFirestore) { }

  async puntosAhorcado(usuario:string, gano:string, intentosUsados:number){
    let newId = this.firestore.createId();
    await this.firestore.collection("puntuaciones").doc(newId).set({
      usuario:usuario,
      intentosUsados: intentosUsados,
      gano: gano,
      juego: 'Ahorcado',
      fechaHora: (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss')
    });
  }

  async puntosMayorMenor(usuario:string, puntuacion:number){
    let newId = this.firestore.createId();
    await this.firestore.collection("puntuaciones").doc(newId).set({
      usuario:usuario,
      puntos: puntuacion,
      juego: 'Mayor y menor',
      fechaHora: (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss')
    });
  }

  async puntosPreguntados(usuario:string, puntuacion:number){
    let newId = this.firestore.createId();
    await this.firestore.collection("puntuaciones").doc(newId).set({
      usuario:usuario,
      puntos: puntuacion,
      juego: 'Preguntados',
      fechaHora: (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss')
    });
  }

  async puntosCasaApuestas(usuario:string, montoGanado:number){
    let newId = this.firestore.createId();
    await this.firestore.collection("puntuaciones").doc(newId).set({
      usuario:usuario,
      montoGanado: montoGanado,
      juego: 'Casa de apuestas',
      fechaHora: (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss')
    });
  }
}
