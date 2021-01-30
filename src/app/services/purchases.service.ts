import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../purchase/state/purchase.model';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class PurchaseService{

    // api endpoint url
    url:string = `${environment.apis.purchases}`;

    constructor(private http: HttpClient){}

    getPurchases(): Observable<Purchase[]>{
        return this.http.get<Purchase[]>(this.url).pipe(
            tap(data=> console.log(data)));
    }
}