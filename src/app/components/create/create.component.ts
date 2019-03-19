import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {State} from '../../state.model';
import {District} from '../../district.model';
import { IssueService } from '../../issue.service';
import {StateService} from '../../state.service';
import { DistrictService } from '../../district.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
states:State[];
district: District[];
stateid : number;
optionSelected: any;
  createForm: FormGroup;
  constructor(private issueService: IssueService,private stateService: StateService,private districtService : DistrictService, private fb:FormBuilder, private router: Router) { 

    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description:'',
      severity:'',
      stateid:'',
      distId:''
    });
  }
 
  fetchStates(){
    this.stateService.getState().subscribe((data:State[])=>{
      console.log('state',data);
      
      this.states=data;
     // console.log('data requested!!!');
      console.log(this.states);
    });
  }
  getDistrict(value){
    console.log(value);
    this.districtService.getDistrict(value).subscribe((data:District[])=>{
      this.district=data;
      
    console.log(this.district);
     });
  }
  onChangeState(){
   
  }
  // onChangeStatenew(stateid: number){
  //   this.districtService
  //   .getDistrictsfill(stateid)
  //   .subscribe((data:District[])=>{
  //   this.district=data;
      
  //   console.log(this.district);
     
  //    });
  //  }
  


  //onChangeState(stateId: number) {
  //  console.log(this.states);
    
  //}
  addIssue(title, responsible, description, severity){
    this.issueService.addIssue(title, responsible, description, severity).subscribe(() =>{
      this.router.navigate(['/list']);
    });
  }
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }

  ngOnInit() {
  this.fetchStates();
  //this.onChangeState();
  }

}
