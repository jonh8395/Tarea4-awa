import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  texto: string;
  constructor() { }
  @Output() sacar = new EventEmitter();
  @ViewChild('sal') sal: ElementRef;
  ngOnInit(): void {
  }

  onmensaje() {
    if (this.texto == null) {
      alert('No puede ser nulo');
      this.sal.nativeElement.focus();
    } else {
    this.sacar.emit('Saludos a ' + this.texto);
    }
  }
}
