import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';

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
  logradouro = ''
  numResidencia = ''
  complementoEnd = ''
  bairro = ''
  localidade = ''
  senha = ''

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
