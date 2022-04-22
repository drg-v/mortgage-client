import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBankComponent } from './create-bank/create-bank.component'
import { EditBankComponent } from './edit-bank/edit-bank.component'
import { BankComponent } from './bank/bank.component'
import { MortgageComponent } from './mortgage/mortgage.component'

const routes: Routes = [
  {path: 'banks', component: BankComponent},
  {path: 'banks/create', component: CreateBankComponent},
  {path: 'banks/mortgage', component: MortgageComponent},
  {path: 'banks/:id/edit', component: EditBankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
