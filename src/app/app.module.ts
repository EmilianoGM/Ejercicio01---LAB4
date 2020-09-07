import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CargarAlumnoComponent } from './components/cargar-alumno/cargar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CargarAlumnoComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
