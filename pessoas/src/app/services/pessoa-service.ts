import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = []

  adicionar(pessoa: Pessoa) {
    this.pessoas.push(pessoa)
  }

  atualizar(pessoa: Pessoa) {
    const index = this.pessoas.findIndex((item) => item.id === pessoa.id);
    if (index >= 0) {
      this.pessoas[index] = pessoa;
    }
  }

  buscarPorId(id: number): Pessoa | undefined {
    return this.pessoas.find((item) => item.id === id);
  }

  listar(): Pessoa[] {
    return this.pessoas
  }

  tamanhoArray(){
    return this.pessoas.length
  }

}