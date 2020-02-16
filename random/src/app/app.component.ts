import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  actividades = [
    'Reprobar a alguien',
    'Poner un examen',
    'Bajar puntos',
    'Expulsar a alguien',
    'Poner otro examen'
  ];
  elegidaActividad = null;
  nuevaActividad = '';

  ngOnInit() {
    $('.fixed-action-btn').floatingActionButton({
      direction: 'left',
      hoverEnabled: false
    });
    $('.modal').modal();
  }

  mostrarActividades() {
    $('#mostrarActModal').modal('open');
  }

  agregarActividades() {
    $('#agregarActModal').modal('open');
  }

  agregando(elemento: HTMLInputElement) {
    if(elemento.value === '') {
      alert('No hay ningn valor.');
    }
    else {
      this.nuevaActividad = elemento.value;
      this.actividades.push(this.nuevaActividad);
    }
  }

  borrarInput(myInput: HTMLInputElement) {
    myInput.value = '';
  }

  elegirActividad() {
    const index = Math.floor(Math.random() * this.actividades.length);
    const actividad = this.actividades[index];

    this.elegidaActividad = actividad;
  }
}
