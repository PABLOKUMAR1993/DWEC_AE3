import { Component } from '@angular/core';
import { Users } from 'src/app/entidades/users';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  ///////////////
  // Atributos.//
  ///////////////


  userName: string = "";
  userNameFixed: string = "";
  pass: string = "";
  userList: Users[] = [];

  userNameError: boolean = false;
  passError: boolean = false;
  logged: boolean = false;
  loggedError: boolean = false;

  
  /////////////////
  // Constructor.//
  /////////////////


  /**
   * Método Constructor nos muestra el título en la pestaña del navegador.
   * Seguidamente crea dos usuarios Demo.
   */
  constructor( title: Title ) {
    
    title.setTitle( "AE3 Angular - Grupo 01" );

    let userDefault: Users;

    userDefault =  new Users( "pavlo", "1234" );
    this.userList.push( userDefault );
    userDefault = new Users( "raul", "4321" );
    this.userList.push( userDefault );
    userDefault = new Users( "felix", "0000" );
    this.userList.push( userDefault );
  
  }


  /////////////
  // Métodos.//
  /////////////


  /**
   * Método que verifica que el usuario y la contraseña existan y sean correctos.
   * Si el @param userName Y la @param pass introducidos coinciden con los de algún objeto
   * usuario almacenado, guardo individualmente los datos del usuario identificado.
   * Seguidamente llama al método cleanInputs() para vaciar los inputs.
   * 
   * Si no, muestro un error de que no se ha podido iniciar sesión.
   */
  public login(): void {

    if( !this.formWithErrors() ) {

      for( let i=0; i<this.userList.length; i++) {

        if( this.userList[i].getUser == this.userName )
        
            if(this.userList[i].getPass == this.pass ) {

          this.logged = true;
          this.userNameFixed = this.userName;
          this.cleanInputs();
          break; //Si es correcto, rompo la ejecución del for.

        } else {

          this.loggedError = true;
          this.cleanInputs();

        }

      }

    }

  }


  /**
   * Método que verifica si los datos introducidos en el formlario no están vacios.
   * @return true. Si hay caracteres.
   * @return false. Si no hay caracteres.
   */
  public formWithErrors(): boolean {

    this.cleanErrors();
    let error : boolean = false;

    if( this.userName.trim().length == 0 ) {
      this.userNameError = true;
      error = true;
    }
    if( this.pass.trim().length == 0 ) {
      this.passError = true;
      error = true;
    }

    return error;

  }


  /**
   * Método que vacia el contenido de los inputs.
   */
  public cleanInputs(): void {
    this.userName = "";
    this.pass = "";
  }


  /**
   * Método que quita los mensajes de error.
   */
  public cleanErrors(): void {
    this.userNameError = false;
    this.passError = false;
  }


}
