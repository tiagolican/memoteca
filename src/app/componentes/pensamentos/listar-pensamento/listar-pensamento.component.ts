import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Tiago',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passa informação para componente filho',
      autoria: 'Tiago',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes',
      autoria: 'José',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passa informação para componente filho',
      autoria: 'João Vitor',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ListarPensamento(){

  }

}
