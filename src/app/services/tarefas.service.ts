import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(tarefas => tarefas.sort((a: any, b: any) => b.id - a.id))
    );
  }

  cadastrarTarefa(tarefa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarefa);
  }

  atualizarTarefaConcluida(tarefa: any): Observable<any> {
    const url = `${this.apiUrl}/${tarefa.id}`;

    return this.http.put(url, tarefa);
  }
}
