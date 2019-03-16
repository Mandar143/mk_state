import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private stateService: StateService,private fb:FormBuilder, private router: Router) { 
  this.createForm = this.fb.group({
    stateid: '',
    statename: ''
  });
}

addState(stateid,statename){
  this.stateService.addState(stateid, statename).subscribe(() =>{
    this.router.navigate(['/list']);
  });
}
  ngOnInit() {
  }

}
