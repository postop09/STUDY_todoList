import { AUTH_TOKEN_KEY } from "../const/token";

class Token {
  static KEY = AUTH_TOKEN_KEY;

  public get(): string | null {
    return localStorage.getItem(Token.KEY);
  }

  public set(token: string) {
    return localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public clear() {
    return localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}

export default new Token();