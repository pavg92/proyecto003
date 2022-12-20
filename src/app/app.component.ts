import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juego de dados';
  resultado = '';
  valor1:number;
  valor2:number;
  valor3:number;

  constructor() {
    this.valor1 = Math.ceil(Math.random()*6);
    this.valor2 = Math.ceil(Math.random()*6);
    this.valor3 = Math.ceil(Math.random()*6);
  }
  generarNum() {
    this.valor1 = Math.ceil(Math.random()*6);
    this.valor2 = Math.ceil(Math.random()*6);
    this.valor3 = Math.ceil(Math.random()*6);

    if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado = 'Ganó';
    }else{
      this.resultado = 'Perdió';
    }
  }
}
