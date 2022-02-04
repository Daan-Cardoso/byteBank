import { Cliente } from './Cliente.js'
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './sistemaAutenticacao.js';

const diretor = new Diretor('Danilo', 5000, 12345678910);
diretor.cadastrarSenha(12345678);
const gerente = new Gerente('Olivia', 2000, 12345678910);

const cliente = new Cliente('Isadora', 2344567810, 100);
cliente.cadastrarSenha('123');

const estaLogado = SistemaAutenticacao.Login(cliente, '123');
console.log(cliente.nome, estaLogado);