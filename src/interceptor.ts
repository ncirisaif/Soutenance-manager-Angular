/*
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./app/token-storage-service";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.tokenStorageService.getToken();
    if (currentUser ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(request);
  }
}
*/
