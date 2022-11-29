import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent {

  // Atributo recibido de padre con el nombre de usuario.
  @Input() userName: string;

}
