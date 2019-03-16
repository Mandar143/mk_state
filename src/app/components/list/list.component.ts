import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../issue.model';
import { State } from '../../state.model';
import { IssueService } from '../../issue.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  states: State[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions']; 
  displayedColumnsstate =['stateid','statename'];
  constructor(private issueService: IssueService,private stateService : StateService, private router: Router) { }

  ngOnInit() {

    this.fetchIssues();
    this.fetchStates();
    /*this.issueService.getIssues().subscribe((issues) => {

      console.log(issues);

    }); */
  }
  fetchStates(){
    this.stateService
    .getState()
    .subscribe((data:State[])=>{
      this.states=data;
      console.log('data requested!!!');
      console.log(this.states);
    });
  }
  fetchIssues(){
    this.issueService
    .getIssues()
    .subscribe((data : Issue[]) => {
      this.issues = data;
      console.log('Data Requested...');
      console.log(this.issues);
    });
  }

  editIssue(id){
    this.router.navigate([`/edit/${id}`]);
    
  }

  deleteIssue(id){

    this.issueService.deleteIssue(id).subscribe(() => {

      this.fetchIssues();

    });
  }
}
