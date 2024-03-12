import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var bearer: string;
        if (sessionStorage.getItem('userToken') != null)
            bearer =
                sessionStorage.getItem('userToken')
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiZXhwIjoxNzEwMjk5MTM3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDc0IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA3NCJ9.rlOrBjmF-Jcka8JAOFnBYFWnGuXn8MQhRF9nxYZxhs8'
        else
            bearer = 'Bearer 111'

        console.log('in HeaderInterceptor bearer = ', bearer)

        const modifiedReq = req.clone({
             headers: req.headers.set('Authorization', bearer).set('Accept', 'application/json')
             });

        return next.handle(modifiedReq);
    }
}
