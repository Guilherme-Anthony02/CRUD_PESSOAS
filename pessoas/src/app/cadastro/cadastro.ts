import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';


@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro implements OnInit {
  id?: number
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''
  uf = ''
  cidade = ''
  sexo = ''
  senha = ''
  editando = false

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      const pessoa = this.pessoaService.buscarPorId(id);
      if (pessoa) {
        this.id = pessoa.id;
        this.nome = pessoa.nome ?? '';
        this.email = pessoa.email ?? '';
        this.cpf = pessoa.cpf ?? '';
        this.dataNascimento = pessoa.dataNascimento ?? '';
        this.uf = pessoa.uf ?? '';
        this.cidade = pessoa.cidade ?? '';
        this.sexo = pessoa.sexo ?? '';
        this.senha = pessoa.senha ?? '';
        this.editando = true;
      }
    }
  }

  save() {
    const pessoa: Pessoa = {
      id: this.editando && this.id ? this.id : this.pessoaService.tamanhoArray() + 1,
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      dataNascimento: this.dataNascimento,
      uf: this.uf,
      cidade: this.cidade,
      sexo: this.sexo,
      senha: this.senha,
    };

    if (this.editando) {
      this.pessoaService.atualizar(pessoa);
    } else {
      this.pessoaService.adicionar(pessoa);
    }

    this.limpaAtributos();
    this.editando = false;
    this.router.navigate(['/lista']);
  }

  limpaAtributos() {
    this.id = undefined;
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.dataNascimento = '';
    this.uf = '';
    this.cidade = '';
    this.sexo = '';
    this.senha = '';
  }
}
