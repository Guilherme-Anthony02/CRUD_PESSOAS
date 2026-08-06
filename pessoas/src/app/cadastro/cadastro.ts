import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';


@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})

export class Cadastro {
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''
  uf = ''
  cidade = ''
  sexo = ''
  senha = ''

  constructor(private pessoaService: PessoaService) { }

  save() {

    this.pessoaService.adicionar({
      id: this.pessoaService.tamanhoArray() +1,
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      dataNascimento: this.dataNascimento

    })

    this.limpaAtributos()
  }

  limpaAtributos() {
    this.nome = ''
    this.email = ''
    this.cpf = ''
    this.dataNascimento = ''
  }


}