import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../models/investment';
import { CalculationsService } from '../../services/calculations.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-investment',
  imports: [FormsModule,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  invest : Investment|null = null;
  http = inject(HttpClient);
  calService = inject(CalculationsService);

  form = {
    principal : 0,
    rate : 0,
    years : 0,
    frequency : 0
  }

  calculateInvestment()
  {
    this.calService.postInvestment(this.form).subscribe({
      next : (res) => {
        this.invest = res
      },
      error : (err) =>
      {
        console.log(err)
      }
    })
  }

}
