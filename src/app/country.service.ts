import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {
  uri ='http://localhost:4000';
  constructor(private http: HttpClient) { 

  }
  getCountries(){
    return this.http.get(`${this.uri}/countries`);
  }

}
