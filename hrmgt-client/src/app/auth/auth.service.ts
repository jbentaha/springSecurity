import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from "./login-response.module";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from "rxjs";
import { RestService } from "../service/http/rest.service";
import { Route, Router } from "@angular/router";

@Injectable()
export class AuthService extends RestService<LoginResponse>{
    
    protected override baseUrl: string = "auth/authenticate";

    constructor(
        protected override readonly http: HttpClient, 
        private readonly jwtHelper: JwtHelperService,
        private readonly router: Router
    ) {
        super(http);
    }

    login(email: string, password: string): Observable<LoginResponse> {
        return this.post({ email, password });
    }

    public setSession(token: string) {
        localStorage.setItem('access_token', token);
    }

    logout() {
        localStorage.removeItem("access_token");
        this.router.navigateByUrl('/login');
    }

    isAuthenticated() {
        const token = localStorage.getItem("access_token");
        return token && !this.isTokenExpired(token);
    }

    private isTokenExpired(token: string): boolean {
        return this.jwtHelper.isTokenExpired(token);
    }

}