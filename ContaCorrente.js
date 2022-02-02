export class ContaCorrente {
  agencia;
  cliente;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo < valor) return;
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