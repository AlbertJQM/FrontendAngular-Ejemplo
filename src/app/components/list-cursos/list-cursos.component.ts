import { CommonModule } from '@angular/common';
import { Curso } from './../../interfaces/Curso';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-cursos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './list-cursos.component.html',
  styleUrl: './list-cursos.component.css'
})
export class ListCursosComponent {
  listCursos: Curso[] = [
    {titulo: 'Angular', encargado: 'Albert', fechaCreacion: new Date(), descripcion: 'Framework'},
    {titulo: 'NET', encargado: 'Jhonatan', fechaCreacion: new Date(), descripcion: 'Ecosistema'}
  ]
}
