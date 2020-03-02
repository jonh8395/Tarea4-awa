import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
 op1: number;
 op2: number;
 resultado: string;
 RES: number;
  constructor() { }
 @Output() propagar = new EventEmitter();

  ngOnInit(): void {
  }

onsuma() {
 this.RES = this.op1 + this.op2;
 this.resultado = this.RES.toString();
 this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la suma.');
}

onresta() {
  this.RES = this.op1 - this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la resta.');
}

onmult() {
  this.RES = this.op1 * this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la multiplicación.');
}


ondiv() {
  this.RES = this.op1 / this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la división.');
}

}
