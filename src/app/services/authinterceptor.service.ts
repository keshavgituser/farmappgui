import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let newReq=req;
    let token=this.loginService.getToken();

    //  console.log("InterCeptor ",token);
   console.log("Successfully authorized");
    
    if(token!=null)
    {
      newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
      
      
    }
    

    return next.handle(newReq)
    
  }
}
