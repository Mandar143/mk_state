import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {State} from './state.model';
@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  states:State[];
 
  uri ='http://localhost:4000';
  constructor(private http: HttpClient) {

   }

   getDistrict(stateid){
   // return this.http.get(`${this.uri}/districts/${stateid}`);
   const state = {
    stateid: parseInt(stateid),
   
  };
  console.log(state);
  return this.http.post(`${this.uri}/districts`,state,{
    headers:new HttpHeaders({
      'content-type':'application/json'
  })
  }
  );
    //return this.http.post(`${this.uri}/districts`);
  }

  getDistrictsfill(stateid:number) {
    return this.http.get(`${this.uri}/districts/${stateid}`);
  
  }
}
