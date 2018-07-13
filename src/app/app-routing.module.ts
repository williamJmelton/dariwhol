import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OpenAccountComponent} from './open-account/open-account.component';
import {FormResultComponent} from './form-result/form-result.component';
import {SalesComponent} from './sales/sales.component';
import {MailingListComponent} from './mailing-list/mailing-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'open-account',
    component: OpenAccountComponent
  },
  {
    path: 'form-result/:mode',
    component: FormResultComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'mailing-list',
    component: MailingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
