export class SistemaAutenticacao {
  static Login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
} 