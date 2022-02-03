import { Conta } from './Conta.js'

export class ContaSalario extends Conta {
  static numeroDeContas = 0;

  constructor(cliente) {
    super(0, cliente, 100);
    ContaSalario.numeroDeContas += 1;
  }
  
  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}