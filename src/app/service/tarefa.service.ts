import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tarefa } from '../modelo/tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly URL = environment.tarefaServiceUrl;

  constructor( private http: HttpClient) { }

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.URL);
  }

  adicionar( descricao: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.URL, {descricao}, {headers: headers})
    .subscribe(() =>{});
    }


  deletar( id : number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.delete(this.URL + `/${id}`, {headers: headers})
    .subscribe( () => {} );
  }

  completar( id: number ) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.put(this.URL + `/${id}` + '/ativo', 'true' ,{headers: headers})
    .subscribe( () => {} );
  }

}
