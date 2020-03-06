import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DisplayComponent } from './components/display/display.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { SaludoComponent } from './components/saludo/saludo.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    DisplayComponent,
    CalculadoraComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModule,
    NgbButtonsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
