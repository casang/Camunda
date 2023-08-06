import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditRequestResp } from './credit-resquest-resp.component'
import { AppComponent} from './app.component'

const routes: Routes = [
  { path: 'credit-request-resp', component: CreditRequestResp},
  { path: '', pathMatch: 'full', component: AppComponent},
  { path: '**', pathMatch: 'full', component: CreditRequestResp },
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
