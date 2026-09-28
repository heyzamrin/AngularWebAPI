import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface APIEmployeFirst {
  Id: number;
  Name: string;
  Age: number;
  Mark: string;
}

const endpoint = 'http://localhost:54540/api/API/';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  addWebApiTab(student: any): Observable<any> {
    return this.http.post(endpoint + 'PostWebAPItab', student);
  }

  getAllWebApiTabs(): Observable<APIEmployeFirst[]> {
    return this.http.get<APIEmployeFirst[]>(endpoint + 'getwebapitabs');
  }

  deleteWebApiTab(id: number): Observable<any> {
    return this.http.delete<APIEmployeFirst>(endpoint + 'Deletetab/' + id);
  }

  getWebApiTabWithId(id: number): Observable<any> {
    return this.http.get<APIEmployeFirst>(endpoint + 'getDetails_id/' + id);
  }
}
