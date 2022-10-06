import { Tarefa } from './../modelo/tarefa';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  listaTarefas : Tarefa[] = []

  constructor( private tarefaService: TarefaService ) { }

  ngOnInit(): void {
    this.tarefaService.listar().subscribe((tarefas) =>
    this.listaTarefas = tarefas)
    this.listaTarefas

  }

  adicionar(descricao: string) {
      this.tarefaService.adicionar(descricao);
      location.reload();
  }

  deletar(id: number) {
    this.tarefaService.deletar(id);
    location.reload();
  }

  completar(id: number) {
    this.tarefaService.completar(id);
    location.reload();
  }

}
