export class Cliente {
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  constructor (nome, cpf) {
    this.name = nome;
    this._cpf = cpf;
  }
}