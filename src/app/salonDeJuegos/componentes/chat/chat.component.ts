import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UsuarioService } from '../../servicios/usuario.service';

interface mensaje{
  usuario:string;
  mensaje:string;
  fechaHoraMensaje:string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private userService:UsuarioService,
              private firestore: AngularFirestore) { }
  mensajes!:Array<any>;
  mensaje='';

  mensajeMostrar='';
  ussuarioMostrar='';
  fechaHoraMostrar='';

  enviar(){
    const newId = this.firestore.createId();
    this.firestore.collection('mensajes').doc(newId).set({
      usuario:this.userService.usuario.mail,
      fechaHoraMensaje: new Date().toLocaleString(),
      mensaje: this.mensaje
    });

    this.ussuarioMostrar = this.userService.usuario.mail;
    this.fechaHoraMostrar = new Date().toLocaleString();
    this.mensajeMostrar = this.mensaje;

    this.appendMensaje();

  }

  appendMensaje(){
    //todo a manopla :(
    var pMensj = document.createElement("p");
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var nodous = document.createTextNode("Usuario: "+ this.ussuarioMostrar);
    var nodofe = document.createTextNode("Fecha: "+ this.fechaHoraMostrar);
    var nodomsj = document.createTextNode("Mensaje: "+ this.mensajeMostrar);
    pMensj.appendChild(nodous);
    pMensj.appendChild(br);
    pMensj.appendChild(nodofe);
    pMensj.appendChild(br2);
    pMensj.appendChild(nodomsj);

    if(this.ussuarioMostrar === this.userService.usuario.mail){
      pMensj.setAttribute('style','text-align: right');
    }

    document.getElementById('chats')?.append(pMensj);
  }

  async getMensajes(){
    var msj!:mensaje;
    var mensajes= new Array<mensaje>();
    let mensajesRef = this.firestore.collection("mensajes").ref.orderBy('fechaHoraMensaje','asc');

     await mensajesRef.get()
     .then(res => res.forEach(userDoc => {
       msj = userDoc.data() as mensaje;
       mensajes.push(msj);
      }));
      
      return mensajes;
  }

  async acomodarMensajes(){
    var mensajes = await this.getMensajes();

    mensajes.forEach((msj:mensaje)=>{
      this.ussuarioMostrar = msj.usuario
      this.fechaHoraMostrar = msj.fechaHoraMensaje;
      this.mensajeMostrar = msj.mensaje;
      this.appendMensaje();
    });

    console.log(mensajes);
  }
  ngOnInit(): void {
    this.acomodarMensajes();
  }

}
