import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }


  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public  getId(): string {
    if (sessionStorage.getItem(TOKEN_KEY)) {
      let token = sessionStorage.getItem(TOKEN_KEY);
      let jwtData = token.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      let id = decodedJwtData.sub;
      return id;
    }
  }




  public saveAuthorities(roles: string[]) {


    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(roles));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(role => {
        this.roles.push(role);
      });
    }

    return this.roles;
  }

  public getAuthoritiesFromToken(token: string): string[] {
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);

    this.roles = decodedJwtData.roles;


    return this.roles;
  }

}
