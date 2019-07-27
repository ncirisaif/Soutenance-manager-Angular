import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import {BehaviorSubject, Observable, throwError} from 'rxjs';



import {catchError, map} from 'rxjs/operators';
import {SignupUser} from "./signup-user";
import {TokenStorageService} from "./token-storage-service";
import {decode} from "punycode";




@Injectable()
export class SignService {
  private _login = 'http://localhost:8080/login';
  private _signup = 'http://localhost:8080/register';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  roles: string[] = [];




  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  signup( user: SignupUser){
    return this.http.post<any>(this._signup, user);

}





  login(username: string, password: string ) {
    this.headers.append('Content-Type', 'application/json');

    return this.http.post<HttpResponse<Object>>(this._login, {username, password}, {observe: 'response'})
        .pipe( catchError(error => this.handleError(error)),map(
        userData => {
          let token = userData.headers.get('authorization');
          let jwtData = token.split('.')[1];
          let decodedJwtJsonData = window.atob(jwtData);
          let decodedJwtData = JSON.parse(decodedJwtJsonData);

          this.roles = decodedJwtData.roles;

            this.tokenStorage.saveToken(token);
          this.tokenStorage.saveAuthorities( this.roles);
          return userData;
        }));
  }
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  };


}
