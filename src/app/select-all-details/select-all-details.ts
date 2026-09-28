import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APIEmployeFirst } from '../my-service';

@Component({
  selector: 'app-select-all-details',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './select-all-details.html',
  styleUrl: './select-all-details.css'
})
export class SelectAllDetails {

  Getdata: APIEmployeFirst[] = [];
  constructor(
    public service: MyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetAllDetails();
  }

  GetAllDetails(): void {

    this.service.getAllWebApiTabs().subscribe({
      next: (resp: any) => {

        console.log('API RESPONSE:', resp);

        this.Getdata = resp;

      },

      error: (err) => {
        console.error('API ERROR:', err);
      }
    });
  }

  deleteDetails(id: number): void {

    this.service.deleteWebApiTab(id)
      .subscribe({
        next: () => {
          this.GetAllDetails();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
  

}