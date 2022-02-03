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
    const taxa = 1;
    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = (valor * taxa).toFixed(2);

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
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