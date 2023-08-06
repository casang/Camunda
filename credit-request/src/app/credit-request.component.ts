/* ORIGINAL
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { CreditRequestService } from './services/credit.service';
import { CreditRequest } from './models/credit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css'],
})

export class FormCreditRequestComponent implements OnInit {

  creditRequest = {} as CreditRequest;
  title = 'Credit Request';
  name = "";
  submitted = false;
  payId = "";
  msgUser = "";

  constructor(private creditRequestService: CreditRequestService) {};

  ngOnInit() {
    console.log ("creditRequest1");
  }

  //
  saveCreditRequest(form: NgForm): void {
    console.log ("creditRequest");
    this.creditRequestService.startCreditRequest(this.creditRequest)
      .subscribe(res => {
        var resJson = JSON.parse(JSON.stringify(res));
        this.payId = resJson.id;
        console.log (this.payId);
        this.creditRequestService.getResultCreditRequest(this.payId)
          .subscribe(res => {
            var resJson = JSON.parse(JSON.stringify(res));
            if (resJson[0] != undefined)
              switch (resJson[0].value)
              {
                case 0: this.msgUser = "Infelizmente seu Crédito foi Negado"; break;
                case 1: this.msgUser = "Seu crédito foi aprovado e já está dispnível em sua conta"; break;
                default: this.msgUser = "Seu crédito está em analise. Enviaremos um e-mail em breve com o resultado da sua solicitação"
              }
            else
              this.msgUser = "Seu crédito está em analise. Enviaremos um e-mail em breve com o resultado da sua solicitação"
            console.log (resJson);
            console.log (resJson[0].value);
          });
        });
    this.submitted = true;
  }

  cleanForm(form: NgForm) {
    this.submitted = false;
    form.resetForm();
  }
}
