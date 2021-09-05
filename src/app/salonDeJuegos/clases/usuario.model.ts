export class Usuario {
    nombre : string;
    clave: string;
    id?: string;
    mail: string;

    constructor(nombreX:string,claveX:string,idx:string, mail:string) {
       this.id = idx;
       this.nombre= nombreX;
       this.clave = claveX;
       this.mail=mail;
    }
}
