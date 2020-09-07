import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

  botonUnoFlag: boolean;
  botonDosFlag: boolean;
  listaAlumnos: Alumno[];

  constructor() {
    this.botonUnoFlag = false;
    this.botonDosFlag = false;
  }

  ngOnInit(): void {
    this.listaAlumnos = [];
  }

  /**
   * ActivarBotonUno
   */
  public ActivarBotonUno() {
    this.botonUnoFlag = true;
    this.botonDosFlag = false;
  }

  /**
   * ActivarBotonDos
   */
  public ActivarBotonDos() {
    this.botonUnoFlag = false;
    this.botonDosFlag = true;
  }

  public OnCargar(alumno){
    this.listaAlumnos.push(alumno);
  }
}

