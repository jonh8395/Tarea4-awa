import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
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
