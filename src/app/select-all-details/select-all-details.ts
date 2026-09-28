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

  
  constructor(
    public service: MyService,
    private router: Router
  ) {
    console.log('COMPONENT CREATED');
  }

  

  GetAllDetails(): void {

    console.log('GET ALL DETAILS CALLED');

    this.service.getAllWebApiTabs().subscribe({
      next: (resp: any) => {

        console.log('API RESPONSE:', resp);

        this.Getdata = resp;

        console.log('GETDATA:', this.Getdata);
        console.log('LENGTH:', this.Getdata.length);
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
  ngOnInit(): void {
    console.log('NG ON INIT');
    this.GetAllDetails();
  }
  Getdata: APIEmployeFirst[] = [];

}