import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Curso } from '../../interfaces/Curso';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-agregar-editar-curso',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './agregar-editar-curso.component.html',
  styleUrl: './agregar-editar-curso.component.css'
})
export class AgregarEditarCursoComponent {
  agregarCurso: FormGroup;
  accion = "Agregar";
  id = 0;
  curso: Curso | undefined;

  constructor(private fb: FormBuilder, 
              private _cursoService: CursoService, 
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.agregarCurso = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get("id")!;
  }

  ngOnInit(): void {  
    this.esEditar();
  }

  esEditar(){
    if(this.id != 0){
      this.accion = "Editar";
      this._cursoService.getCurso(this.id).subscribe({
        next: (data) => {
          this.curso = data;
          this.agregarCurso.patchValue({
            titulo: data.titulo,
            creador: data.creador,
            texto: data.texto
          });
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          // Código a ejecutar cuando el observable se complete (opcional)
        }
      }

      );
    }
  }

  agregarEditarCurso(){

    if(this.curso == undefined){
      const curso: Curso = {
        titulo: this.agregarCurso.get('titulo')?.value,
        creador: this.agregarCurso.get('creador')?.value,
        texto: this.agregarCurso.get('texto')?.value,
        fecha: new Date
      }
  
      this._cursoService.postCurso(curso).subscribe({
          next: (data) => {
            this.router.navigate(["/"]);
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            // Código a ejecutar cuando el observable se complete (opcional)
          }
        }
      );
    } else {
      const curso: Curso = {
        id: this.curso.id,
        titulo: this.agregarCurso.get('titulo')?.value,
        creador: this.agregarCurso.get('creador')?.value,
        texto: this.agregarCurso.get('texto')?.value,
        fecha: this.curso.fecha
      }
      this._cursoService.putCurso(this.id, curso).subscribe({
        next: (data) => {
          this.router.navigate(["/"]);
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
}
