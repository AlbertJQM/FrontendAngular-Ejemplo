import { CommonModule } from '@angular/common';
import { Curso } from './../../interfaces/Curso';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-list-cursos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './list-cursos.component.html',
  styleUrl: './list-cursos.component.css'
})
export class ListCursosComponent implements OnInit{
  listCursos: Curso[] = []

  constructor(private _cursoService: CursoService){
  }

  ngOnInit(): void{
    this.getCursos();
  }

  getCursos(){
    this._cursoService.getListCursos().subscribe({
      next: (data) => {
        this.listCursos = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Código a ejecutar cuando el observable se complete (opcional)
      }
    });
  }

  eliminarCurso(id: any){
    console.log(id);
    this._cursoService.deleteCurso(id).subscribe({
      next: (data) => {
        this.getCursos();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Código a ejecutar cuando el observable se complete (opcional)
      }
    });
  }
}
