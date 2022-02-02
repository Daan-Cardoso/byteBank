import { Cliente } from './Cliente.js'

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  
  set cliente(novoClient) {
    if(novoClient instanceof Cliente) {
      this._cliente = novoClient;
    }
  }

  get cliente() {
    this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) return;
    this._saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
    return valor;
  }

  transferir(valor, conta) {
    if (valor > 0) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }
}