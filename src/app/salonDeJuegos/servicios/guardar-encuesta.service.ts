import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GuardarEncuestaService {

  constructor(private firestore: AngularFirestore) { }

  async guardarEncuesta(usuario:string, formValue:any, juego:string){
    let informacion = {...formValue};
    informacion.usuario = usuario;
    informacion.fechaHora = (moment(moment.now())).format('DD-MM-YYYY HH:mm:ss');
    informacion.juego = juego;

    let newId = this.firestore.createId();
    await this.firestore.collection("encuestas").doc(newId).set(informacion);
  }
}
