import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const bearer =
            localStorage.getItem('userToken')
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiZXhwIjoxNzEwMjcwOTcwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDc0IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA3NCJ9.1H-CsWbBfWGvHv3wX3eqiH7iG9u2pDtLQLjtOYZrSLo'

        console.log('in HeaderInterceptor ', bearer);

        const modifiedReq = req.clone({ headers: req.headers.set('Authorization', bearer) });

        return next.handle(modifiedReq);
    }
}
