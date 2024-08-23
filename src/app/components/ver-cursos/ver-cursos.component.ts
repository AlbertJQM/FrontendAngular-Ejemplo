import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../interfaces/Curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-cursos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ver-cursos.component.html',
  styleUrl: './ver-cursos.component.css'
})
export class VerCursosComponent implements OnInit {
  id: number;
  curso: Curso | undefined;

  constructor(private aRoute: ActivatedRoute, private _cursoService: CursoService){ 
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
      this.getCurso();
  }

  getCurso(){
    this._cursoService.getCurso(this.id).subscribe({
      next: (data) => {
        this.curso = data;
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
