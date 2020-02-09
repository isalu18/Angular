import { Component } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  variable = '';

  miFuncion(elemento: HTMLInputElement){
    console.log(elemento.value);

    if(elemento.value === ''){
      alert('No hay ningn valor.');
    }
    else{
      this.variable = elemento.value;
    }

  }
}
