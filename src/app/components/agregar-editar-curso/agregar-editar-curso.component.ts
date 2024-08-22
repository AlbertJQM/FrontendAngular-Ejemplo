import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-curso',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './agregar-editar-curso.component.html',
  styleUrl: './agregar-editar-curso.component.css'
})
export class AgregarEditarCursoComponent {
  agregarCurso: FormGroup;

  constructor(private fb: FormBuilder){
    this.agregarCurso = this.fb.group({
      titulo: ['', Validators.required],
      encargado: ['', Validators.required],
      descripcion: ['', Validators.required]
    })  
  }

  ngOnInit(): void{

  }

  agregar(){
    console.log(this.agregarCurso)
  }
}
