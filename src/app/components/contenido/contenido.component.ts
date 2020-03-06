import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
 totales: any[];
  constructor() { }

  ngOnInit(): void {
    this.totales = new Array();
  }

  procesar(mensaje) {
    if (this.totales.length >= 0 &&  this.totales.length < 5) {
    this.totales.push(mensaje);
    console.log(mensaje);
    } else {
      this.totales.shift();
      this.totales.push(mensaje);
    }
  }
}
