import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  canShow = true;
  ar = [1, 2, 3, 4, 5];
  objetos = [
    {
      name: 'isaac',
      id: '29471'
    },
    {
      name: 'huguin',
      id: '24235'
    }
  ]
}
