import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
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
 @ViewChild('uno') uno: ElementRef;
 @ViewChild('dos') dos: ElementRef;

  ngOnInit(): void {
  }

onsuma() {
  if(this.op1 == null && this.op2 == null) {
    alert('Los operandos No pueden ser nulos');
  } else if (this.op1 == null) {
    alert('El operando 1 no puede ser nulo');
    this.uno.nativeElement.focus();
  } else if (this.op2 == null) {
    alert('El operando 2 no puede ser nulo');
    this.dos.nativeElement.focus();
  } else {
 this.RES = this.op1 + this.op2;
 this.resultado = this.RES.toString();
 this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la suma.');
  }
}

onresta() {
  if (this.op1 == null && this.op2 == null) {
    alert('Los operandos No pueden ser nulos');
  } else if (this.op1 == null) {
    alert('El operando 1 no puede ser nulo');
    this.uno.nativeElement.focus();
  } else if (this.op2 == null) {
    alert('El operando 2 no puede ser nulo');
    this.dos.nativeElement.focus();
  } else {
  this.RES = this.op1 - this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la resta.');
}
}

onmult() {
  if (this.op1 == null && this.op2 == null) {
    alert('Los operandos No pueden ser nulos');
  } else if (this.op1 == null) {
    alert('El operando 1 no puede ser nulo');
    this.uno.nativeElement.focus();
  } else if (this.op2 == null) {
    alert('El operando 2 no puede ser nulo');
    this.dos.nativeElement.focus();
  } else {
  this.RES = this.op1 * this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la multiplicación.');
}
}


ondiv() {
  if (this.op1 == null && this.op2 == null) {
    alert('Los operandos No pueden ser nulos');
  } else if (this.op1 == null) {
    alert('El operando 1 no puede ser nulo');
    this.uno.nativeElement.focus();
  } else if (this.op2 == null) {
    alert('El operando 2 no puede ser nulo');
    this.dos.nativeElement.focus();
  } else {
  this.RES = this.op1 / this.op2;
  this.resultado = this.RES.toString();
  this.propagar.emit('Calculadora envio resultado ' + this.resultado + ' de la división.');
}
}
}
