import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
  static numeroDeContas = 0;

  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
    ContaPoupanca.numeroDeContas += 1;
  }
}