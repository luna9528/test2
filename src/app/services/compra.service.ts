import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private myAppurl: string = environment.endpoint;
  private myApiUrl: string = 'api/Compras/';


  constructor(private http: HttpClient) { }

  getCompras(): Observable<any>{
    return this.http.get('this.myAppUrl + this.myApiUrl');
  }
}
