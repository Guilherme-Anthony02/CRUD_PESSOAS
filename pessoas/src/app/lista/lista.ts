import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';


@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  constructor(private pessoaService: PessoaService){}

  listaPessoa(){
    return this.pessoaService.listar()
  }
}