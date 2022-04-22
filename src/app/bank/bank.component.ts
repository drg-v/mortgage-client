import { Component, OnInit } from '@angular/core';
import { BankService } from '../_services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks: any[] = [];
  errorMessage = "";
  displayedColumns: string[] = ['name', 'interestRate', 'maxLoan', 'minDownPayment', 'loanTermMonths', 'delete'];

  constructor(private bankService: BankService) { }

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

  delete(id: number) {
    this.bankService.delete(id).subscribe(
        data => {
          console.log(data);
          window.location.reload();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
  }
  
}
