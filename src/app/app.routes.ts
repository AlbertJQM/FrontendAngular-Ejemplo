import { Routes } from '@angular/router';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { AgregarEditarCursoComponent } from './components/agregar-editar-curso/agregar-editar-curso.component';
import { VerCursosComponent } from './components/ver-cursos/ver-cursos.component';

export const routes: Routes = [
    { path: '', component: ListCursosComponent },
    { path: 'agregar', component: AgregarEditarCursoComponent },
    { path: 'editar/:id', component: AgregarEditarCursoComponent },
    { path: 'ver/:id', component: VerCursosComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }    
];
