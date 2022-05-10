import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { GuardarEncuestaService } from '../../servicios/guardar-encuesta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  
  form!: FormGroup;
  titulo!:string;
  usuario!:string;
  juego!:string;

  error_msg = {
    'nombre': [
      { 
        type: 'required', 
        message: 'Nombre requerido.' 
      },
      {
        type: 'minlength',
        message: 'Longitud minima 2 caracteres.'
      },
      {
        type: 'pattern',
        message: 'Solo letras.'
      },
    ],
    'apellido': [
      { 
        type: 'required', 
        message: 'Apellido requerido.' 
      },
      {
        type: 'minlength',
        message: 'Longitud minima 2 caracteres.'
      },
      {
        type: 'pattern',
        message: 'Solo letras.'
      },
    ],
    'edad': [
      { 
        type: 'required', 
        message: 'Edad requerida.' 
      },
      { 
        type: 'pattern',
        message: 'Solo numeros.'
      },
      {
        type: 'maxlength',
        message: 'Longitud maxima 2 caracteres.'
      },
      {
        type: 'minlength',
        message: 'Longitud minima 2 caracteres.'
      },
      {
        type: 'min',
        message: 'Edad minima 18 años.'
      },
      {
        type: 'max',
        message: 'Edad maxima 99 años'
      }
    ],
    'telefono': [
      { 
        type: 'required', 
        message: 'Telefono requerido.' 
      },
      {
        type: 'pattern',
        message: 'Solo numeros.'
      },
      {
        type: 'minlength',
        message: 'Longitud minima 10 caracteres.'
      },
      {
        type: 'maxlength',
        message: 'Longitud maxima 10 caracteres.'
      },
    ],
    'reJugar': [
      { 
        type: 'required', 
        message: 'Elección requerida.' 
      }
    ],
    'opinion': [
      { 
        type: 'required', 
        message: 'Opinión requerida.' 
      },
      {
        type: 'minlength',
        message: 'Longitud minima 20 caracteres.'
      }
    ],
    'estrellas': [
      { 
        type: 'required', 
        message: 'Estrellas requeridas.' 
      },
    ],
  };

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EncuestaComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private guardarEncuestaService: GuardarEncuestaService,
    private toastr: ToastrService,
    ) { 
      this.titulo = data.title;
      this.usuario = data.usuario;
      this.juego = data.juego;
    }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      apellido: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      edad: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.maxLength(2),
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(99)
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]+'),
        Validators.required
      ])),
      reJugar: new FormControl('', Validators.compose([
        Validators.required
      ])),
      opinion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(20),
      ])),
      estrellas: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close();
    this.guardarEncuestaService.guardarEncuesta(this.usuario, this.form.value, this.juego);
    this.toastr.success('Tu opinión sobre este juego fue guardada', 'Gracias por la ayuda');
  }

}
