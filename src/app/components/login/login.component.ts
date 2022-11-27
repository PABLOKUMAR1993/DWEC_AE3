import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/entidades/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


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
   * Para hacer routas programáticas debemos de usar el objeto "router"
   * Le pedimos a Angular que nos lo inyecte cuando cree este componente
   */
  constructor( private router: Router ) {}


  /////////////
  // Métodos.//
  /////////////

  
  /**
   * Método que se ejecuta siempre al cargar el componente.
   * crea una sesión a nivel de navegador en "sessionStorage", para que esté
   * disponible por todos los componentes, pero a false, sólo se ha creado
   * la variable session.
   * Seguidamente crea dos usuarios DEMO.
   */
  ngOnInit(): void {

    let userDefault : Users;

    userDefault =  new Users( "pavlo", "1234" );
    this.userList.push( userDefault );
    userDefault = new Users( "raul", "4321" );
    this.userList.push( userDefault );

  }


  /**
   * Método que verifica que el usuario y la contraseña existan y sean correctos.
   * Si el userName Y la pass introducidos coinciden con los de algún objeto
   * usuario almacenado, guardo individualmente los datos del usuario identificado.
   * Seguidamente llama al método cleanInputs() para vaciar los inputs.
   * 
   * Si no, muestro un error de que no se ha podido iniciar sesión.
   */
  public login(): void {

    if( this.formWithErrors() == false ) {

      for( let i=0; i<this.userList.length; i++) {

        if( this.userList[i].getUser == this.userName && this.userList[i].getPass == this.pass ) {
          this.logged = true;
          this.userNameFixed = this.userName;
          this.cleanInputs();
          this.shareUserName();
          break;
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


  /**
   * Método que pasa a todas las URLs el nombre de usuario.
   */
  public shareUserName(): void {

    this.router.navigate( [ '', this.userNameFixed ] );
    this.router.navigate( [ '/contact', this.userNameFixed ] );
    this.router.navigate( [ '/about', this.userNameFixed ] );

  }


}
