import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {


  ///////////////
  // Atributos.//
  ///////////////


  name: string = "";
  about: string = "";
  content: string = "";
  
  nameEmpty: boolean = false;
  aboutEmpty: boolean = false;
  contentEmpty: boolean = false;
  formFull: boolean = false;


  /////////////////
  // Constructor.//
  /////////////////


  /**
   * Método Constructor que mediante @param title le pone un título a la pestaña del navegador.
   */
  constructor( title: Title ) { title.setTitle( "Contacto" ); }


  /////////////
  // Métodos.//
  /////////////  


  /**
   * Si alguno de los inputs está vacio, muestro un error en el o los inputs correspondientes.
   * Si los tres tienen contenido, muestro un mensaje de enviado correctamente.
   */
  public receiveForm(): void {

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

    if( !this.nameEmpty && !this.aboutEmpty && !this.contentEmpty ) {
      this.formFull = true;
      this.cleanInputs();
    }

  }


  /**
   * Cada vez que se pulse el botón de enviar, se vaciaran los mensajes de error
   * y sólo se mostarán los nuevos que procedan.
   */
  public cleanErrors(): void {

    if( this.nameEmpty || this.aboutEmpty || this.contentEmpty ) {
      this.nameEmpty = false;
      this.aboutEmpty = false;
      this.contentEmpty = false;
      this.formFull = false;
    }

  }

  
  /**
   * Vacia el contenido de los inputs.
   */
  public cleanInputs(): void {

    this.name = "";
    this.about = "";
    this.content = "";

  }

}
