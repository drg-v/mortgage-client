import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../_services/bank.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.css']
})
export class EditBankComponent implements OnInit {

  bankForm: FormGroup;
  errorMessage = '';
  id: number = 0;

  constructor(private fb: FormBuilder,
    private router: Router,
    private bankService: BankService,
    private route: ActivatedRoute
    ) { 
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
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  submit(): void {
    const values = this.bankForm.value;
    console.log(values);
    this.bankService.update(this.id, values.name, values.interestRate, values.maxLoan, values.minDownPayment, values.loanTermMonths).subscribe(
          data => {
            this.router.navigate(['/banks']);
          },
          err => {
            this.errorMessage = err.error.message;
          }
      );
    
  }
}
