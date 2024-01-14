import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    private readonly authService = inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const baseUrl = 'http://localhost:8081';
        const version = '/api/v1/'
        const apiUrl = `${baseUrl}${version}${req.url}`;
        
        if(!req.url.includes("/authenticate") && !this.authService.isAuthenticated()) {
            this.authService.logout();
        }
        
        const authToken = localStorage.getItem('access_token');
        
        const apiReq = req.clone({
            url: apiUrl,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authToken != null ? `Bearer ${authToken}` : '',
                'crossOrigin': 'http://localhost:8081'
            })
        });

        return next.handle(apiReq);
    }

}