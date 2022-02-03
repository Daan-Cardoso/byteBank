import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(500);

const cliente2 = new Cliente("Alice", 8882223309);
const conta2 = new ContaPoupanca(100, cliente2, 1002);
conta2.sacar(100);

console.log(conta1, conta2);