import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  cadastrarTarefa(tarefa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarefa);
  }
}
