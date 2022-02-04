export class SistemaAutenticacao {
  static Login(autenticavel, senha) {
    if(this.eAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static eAutenticavel(autenticavel) {
    return "autenticar" in autenticavel &&
    autenticavel.autenticar instanceof Function;
  }
} 