import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://127.0.0.1:800'; // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) {}

  agregarAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-alumno`, alumno);
  }

  consultarAlumnos(grado: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/consultar-alumno/${grado}`);
  }
}
