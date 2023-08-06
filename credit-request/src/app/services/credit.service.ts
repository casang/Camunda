import { RespCreditRequest } from './../models/credit';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CreditRequest } from '../models/credit';
import { CreditRequestToCamunda } from '../models/credit';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})

export class CreditRequestService {

  //urlStart = 'http://localhost:3000/cars'; // api rest fake
  //urlStart = '/cars/100'; // api rest fake
  //urlStart = '/engine-rest/history/activity-instance'
  urlStart = '/engine-rest/process-definition/key/credit-request/start';
  //urlStart = 'http://localhost:8080/engine-rest/process-definition/key/credit-request/start';
  //urlStart = '/engine-rest/process-definition/key/credit-request/start';
  //urlStart = 'http://127.0.0.1:8080';
  //urlResult = 'http://localhost:8080/engine-rest/history/variable-instance?processInstanceId=%s&variableName=approved';
  urlResult = '/engine-rest/history/variable-instance?processInstanceId=%s&variableName=approved';
  ret: RespCreditRequest = {definitionId:"", approved:0};

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080 always'})
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    "host": "localhost"})
  }

  // salva uma proposta de credito
  startCreditRequest(cr: CreditRequest): Observable<string> {
    //var car: Car = {"price": 100, "color": "", "id":100, "model": "" };
    console.log (cr);
    console.log (JSON.stringify(CreditRequestToCamunda(cr)));
    return this.httpClient.post<string>(this.urlStart, JSON.stringify(CreditRequestToCamunda(cr)), this.httpOptions)
    //return this.httpClient.get<string>(this.urlStart, this.httpOptions)
    .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getResultCreditRequest(Id: string): Observable<string> {
    var urlAux = this.urlResult;
    urlAux = urlAux.replace('%s', Id);
    console.log(urlAux);
    return this.httpClient.get<string>(urlAux, this.httpOptions)
    .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

/*
  saveCreditRequest (cr: CreditRequest): Observable<string> {
    var resJson: any = undefined;
    var resJson1: any = undefined;

    let teste: number = 2;

    this.startCreditRequest(cr).subscribe((res: any) => {
      resJson = JSON.parse(JSON.stringify(res));
      teste = 6;
    });
    while (resJson == undefined);
    this.getResultCreditRequest(resJson.id).subscribe((res1: any) => {
      resJson1 = JSON.parse(JSON.stringify(res1));
      if (resJson1.length == 1)
      {
          this.ret.definitionId= "xxx";
          this.ret.approved= 2;
          teste = 5;
          console.log(this.ret);
      }
    });
    while (resJson1 == undefined);
    //this.ret.definitionId= "aaa";
    //this.ret.approved= 1;
    console.log(this.ret);
    console.log (teste);
  }
*/

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
