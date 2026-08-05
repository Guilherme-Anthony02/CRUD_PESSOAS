import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa-service';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''

  constructor(private pessoaService: PessoaService) { }

  save() {
    this.pessoaService.adicionar({
      id: 1,
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      dataNascimento: this.dataNascimento
    })

  }

}
