import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private myAppUrl = 'http://localhost:5033/';
  private myApiUrl = 'api/curso/';
  constructor(private http: HttpClient) { }

  getListCursos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteCurso(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getCurso(id: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  postCurso(curso: Curso): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, curso);
  }

  putCurso(id: number, curso: Curso): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, curso);
  }
}