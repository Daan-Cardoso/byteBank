import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 8882223309);
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaPoupanca(100, cliente2, 1002);
const conta3 = new ContaSalario(cliente1);
conta3.depositar(200);
conta3.sacar(10);

console.log(conta3);