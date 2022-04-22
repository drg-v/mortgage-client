import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const BANK_API = 'http://localhost:8080/banks';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  getAllBanks(): Observable<any> {
    return this.http.get(BANK_API, httpOptions);
  }

  getBank(id: string): Observable<any> {
    return this.http.get(BANK_API + "/" + id, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(BANK_API + '/' + id, httpOptions);
  }

  create(name: string, interestRate: number, maxLoan: number, minDownPayment: number, loanTermMonths: number): Observable<any> {
    return this.http.post(BANK_API, {
      "name": name,
      "interestRate": Number(interestRate),
      "maxLoan": Number(maxLoan),
      "minDownPayment": Number(minDownPayment),
      "loanTermMonths": Number(loanTermMonths)
    }, httpOptions);
  }

  update(id: number, name: string, interestRate: number, maxLoan: number, minDownPayment: number, loanTermMonths: number): Observable<any> {
    return this.http.put(BANK_API, {
      "id": id,
      "name": name,
      "interestRate": Number(interestRate),
      "maxLoan": Number(maxLoan),
      "minDownPayment": Number(minDownPayment),
      "loanTermMonths": Number(loanTermMonths)
    }, httpOptions);
  }

  calculateMortgage(bankid: number, initialLoan: number, downPayment: number): Observable<any> {
    let payload = {
      "bankID": bankid,
      "initialLoan": Number(initialLoan),
      "downPayment": Number(downPayment)
    }
    console.log("payload");
    console.log(payload);
    return this.http.post(BANK_API + "/mortgage", payload, httpOptions);
  }
}
