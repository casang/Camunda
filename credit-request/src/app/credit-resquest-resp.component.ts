import { CreditRequest } from './models/credit';
import { Component } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'credit-req-resp',
  template: `
    <article class="template animated slideInRight">
      <h4>Yessss!</h4>
      <div>Seu Crédito foi aprovado.</div>
    </article>
  `
})
export class CreditRequestResp { }
