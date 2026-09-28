import { Component } from '@angular/core';
import { MyService, APIEmployeFirst } from '../my-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-details',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './select-details.html',
  styleUrl: './select-details.css'
})
export class SelectDetails {
              
  student: APIEmployeFirst | undefined;

  id: number = 0;

  constructor(
    public rest: MyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    var paramId = this.route.snapshot.paramMap.get("id");
    // id get from querystring or URL

    if (paramId != null && paramId !== undefined) {

      this.id = +paramId;

      this.rest.getWebApiTabWithId(this.id).subscribe(
        (data: APIEmployeFirst) => {
          this.student = { ...data };
        }
      );

    }
  }
}
















































































