import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBankComponent } from './create-bank/create-bank.component';

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { EditBankComponent } from './edit-bank/edit-bank.component';
import { MortgageComponent } from './mortgage/mortgage.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    CreateBankComponent,
    EditBankComponent,
    MortgageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
