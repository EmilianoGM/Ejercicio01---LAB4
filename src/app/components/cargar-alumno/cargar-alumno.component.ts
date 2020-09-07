import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-cargar-alumno',
  templateUrl: './cargar-alumno.component.html',
  styleUrls: ['./cargar-alumno.component.css']
})

export class CargarAlumnoComponent implements OnInit {
  @Output() onCargar = new EventEmitter<Alumno>();
  nombre: string;
  apellido: string;
  legajo: number;
  materia: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * CargarAlumno
   */
  public CargarAlumno() {
    const alumno = new Alumno(this.nombre, this.apellido, this.legajo, this.materia);
    this.onCargar.emit(alumno);
  }

}
