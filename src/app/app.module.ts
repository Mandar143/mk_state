import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule, Routes } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule , MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


import { IssueService } from './issue.service';

import { StateComponent } from './components/state/state.component';
import { StateService } from './state.service';
import { CountrieService } from './country.service';
import { DistrictService } from './district.service';
const routes : Routes = [

  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'state', component: StateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'}

];




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule.forRoot(routes),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule,
    HttpClientModule
  ],
  providers: [IssueService,StateService,CountrieService,DistrictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
