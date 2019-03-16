import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {State} from './state.model';
@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  states:State[];
 
  uri ='http://localhost:4000';
  constructor(private http: HttpClient) {

   }

   getDistrict(){
   // return this.http.get(`${this.uri}/districts/${stateid}`);
    return this.http.get(`${this.uri}/districts`);
  }

  getDistrictsfill(stateid:number) {
    return this.http.get(`${this.uri}/districts/${stateid}`);
  
  }
}
