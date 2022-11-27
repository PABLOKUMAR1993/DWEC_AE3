import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {


  ///////////////
  // Atributos.//
  ///////////////


  name:string = "";
  about:string = "";
  content:string = "";
  userName:string = "";
  
  nameEmpty:boolean = false;
  aboutEmpty:boolean = false;
  contentEmpty:boolean = false;
  formFull:boolean = false;

  /////////////////
  // Constructor.//
  /////////////////


  constructor( private route: ActivatedRoute ) {

    this.userName = route.snapshot.params[ "userName" ];

  }


  /////////////
  // Métodos.//
  /////////////  


  /**
   * Si alguno de los inputs está vacio, muestro un error en el o los inputs correspondientes.
   * Si los tres tienen contenido, muestro un mensaje de enviado correctamente.
   */
  public receiveForm() {

    this.cleanErrors();

    if( this.name.trim().length == 0 ) {
      this.nameEmpty = true;
    }
    if( this.about.trim().length == 0 ) {
      this.aboutEmpty = true;
    }
    if( this.content.trim().length == 0 ) {
      this.contentEmpty = true;
    }

    if( this.nameEmpty && this.aboutEmpty && this.contentEmpty ) {
      this.formFull = true;
    }

  }


  /**
   * Cada vez que se pulse el botón de enviar, se vaciaran los mensajes de error
   * y sólo se mostarán los nuevos que procedan.
   */
  public cleanErrors() {

    if( this.nameEmpty || this.aboutEmpty || this.contentEmpty ) {
      this.nameEmpty = false;
      this.aboutEmpty = false;
      this.contentEmpty = false;
    }

  }

}
