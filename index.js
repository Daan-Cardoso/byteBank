import { Cliente } from './Clients.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente("Ricardo", 11122233309);

const conta1 = new ContaCorrente(cliente1, 1001)

const cliente2 = new Cliente("Alice", 8882223309);

const conta2 = new ContaCorrente(cliente2, 1002)

conta1.depositar(100);
conta1.sacar(50);
conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);