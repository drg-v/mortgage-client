import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../_services/bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  bankForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private bankService: BankService) {
                this.bankForm = this.fb.group({
                  name: ['', Validators.required],
                  interestRate: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                  maxLoan: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                  minDownPayment:   ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                  loanTermMonths: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
                }
              );
               }

  ngOnInit(): void {
  }

  submit(): void {
    const values = this.bankForm.value;
    console.log(values);
    this.bankService.create(values.name, values.interestRate, values.maxLoan, values.minDownPayment, values.loanTermMonths).subscribe(
          data => {
            this.router.navigate(['/banks']);
          },
          err => {
            this.errorMessage = err.error.message;
          }
      );
    
  }

}
