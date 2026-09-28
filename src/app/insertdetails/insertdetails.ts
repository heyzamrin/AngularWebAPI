import { Component, Input } from '@angular/core';
import { MyService } from '../my-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-insertdetails',
  styleUrl: './insertdetails.css',
  templateUrl: './insertdetails.html',
})
export class Insertdetails {

  @Input() studentData = {
    Name: '',
    Age: 0,
    mark: 0
  };

  constructor(
    private myservice: MyService,
    private router: Router
  ) {}
 
  // Pageload
  ngOnInit(): void {
  }

addstudentdata(): void {
  this.myservice.addWebApiTab(this.studentData).subscribe(
    (result) => {
      this.router.navigate(['/AllDetails']);
    },
    (err) => {
      console.log(err);
    }
  );
}


}

 