import { Component,inject } from '@angular/core';
import { Emi } from '../../models/emi';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalculationsService } from '../../services/calculations.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emi',
  standalone : true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './emi.component.html',
  styleUrl: './emi.component.css'
})
export class EmiComponent {

  emiData : Emi | null = null;
  http = inject(HttpClient);
  calService = inject(CalculationsService);
  

  form = {
    principal : 0,
    rate : 0,
    months :0
  }

  calculateEmi()
  {
    this.calService.postEMI(this.form).subscribe({
      next: (response) => {
        console.log(response)
        this.emiData=response
        console.log('Emi data stored', response);
        
      },
      error: (err) => {
      console.log(err)
      }
    })
  }

}
