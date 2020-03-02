import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  texto: string;
  constructor() { }
  @Output() sacar = new EventEmitter();
  ngOnInit(): void {
  }

  onmensaje() {
    this.sacar.emit('Saludos a ' + this.texto);
  }
}
