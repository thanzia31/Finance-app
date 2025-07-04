import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emi } from '../models/emi';
import { Investment } from '../models/investment';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  http = inject(HttpClient)

  constructor() { }

  private apiURL = "http://localhost:3002"

   postEMI(data : Partial<Emi>): Observable<Emi> {
    return this.http.post<Emi>(`${this.apiURL}/postEmi`, data);
  }

  postInvestment(data : Partial<Investment>): Observable<Investment> {
    return this.http.post<Investment>(`${this.apiURL}/postInvestment`, data);
  }
}
