import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authSrv: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    let req = request;

    this.authSrv.user$.subscribe(user => {

      console.log(user);
      if(!user){
        return
      }

      const newReq = request.clone({
        headers:request.headers.append('Authorization',`Bearer ${user.accessToken}`)
      })

      req = newReq;

    })

    return next.handle(req)




  }
}
