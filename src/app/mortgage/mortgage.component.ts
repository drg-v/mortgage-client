import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../_services/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  mortgageForm: FormGroup;
  mortgage: number = 0;
  banks: any[] = [];
  errorMessage = '';

  constructor(private fb: FormBuilder,
              private bankService: BankService,
              private router: Router) {
                this.mortgageForm = this.fb.group({
                  initialLoan: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                  downPayment: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                  bankID: ['', Validators.required],
                  }
              );
               }

  ngOnInit(): void {
    this.bankService.getAllBanks().subscribe(
      data => {
        this.banks = data;
        console.log(this.banks);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  submit(): void {
    const values = this.mortgageForm.value;
    console.log(values);
    this.bankService.calculateMortgage(values.bankID, values.initialLoan, values.downPayment).subscribe(
          data => {
            this.mortgage = data.monthlyPayment;
            console.log(data);
            this.errorMessage = ""
            //window.location.reload();
          },
          err => {
            this.errorMessage = err.error;
            this.mortgage = 0;
            console.log(this.errorMessage);
          }
          );
    }
  }

