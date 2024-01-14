import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class RestService<T> {

    protected abstract baseUrl: string;

    constructor(protected http: HttpClient) { }

    getAll(headers?: HttpHeaders): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl, { headers });
    }

    getOne(id: string | number, headers?: HttpHeaders): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${id}`, { headers });
    }

    post(body: Object, headers?: HttpHeaders): Observable<T> {
        return this.http.post<T>(this.baseUrl, body, { headers });
    }

    update(id: string | number, body: T, headers?: HttpHeaders): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${id}`, body, { headers });
    }

    delete(id: string | number, headers?: HttpHeaders): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}/${id}`, { headers });
    }

}