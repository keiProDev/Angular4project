import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { MdDialogModule, MdButtonModule ,MdRadioModule  } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent} from './app.component';
import { NavbarComponent  } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';

import { FooterComponent } from './footer/footer.component';
import { RostersComponent } from './rosters/rosters.component';
import { RosteringComponent } from './rostering/rostering.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PublishModal ,PublishConfirmModal,PublishSuccessModal} from './rostering/rostering.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { PasswordlinkComponent } from './passwordlink/passwordlink.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { BusinessdetailComponent } from './businessdetail/businessdetail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeclineshiftComponent } from './declineshift/declineshift.component';
import { CreateaccountsuccessComponent } from './createaccountsuccess/createaccountsuccess.component';

import {TodoSearchPipe} from './todolist/todolist.component';

import { EmployeeService } from './employee.service';
import { NavbarService } from './navbar.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatenewaccountComponent } from './createnewaccount/createnewaccount.component';
import { ForgotpasswordemailComponent } from './forgotpasswordemail/forgotpasswordemail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    FooterComponent,
    RostersComponent,
    RosteringComponent,
    TodolistComponent,
    PublishModal,
    PublishConfirmModal,
    PublishSuccessModal,
    LoginComponent,
    ForgotPasswordComponent,
    PasswordlinkComponent,
    TodoSearchPipe,
    CreateaccountComponent,
    ResetpasswordComponent,
    BusinessdetailComponent,
    EditprofileComponent,
    DeclineshiftComponent,
    CreateaccountsuccessComponent,
    CreatenewaccountComponent,
    ForgotpasswordemailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdDialogModule,
    MdButtonModule,
    MdRadioModule,
    BrowserAnimationsModule,
    MdSidenavModule
  ],
  exports: [
    PublishModal,
    PublishConfirmModal,
    PublishSuccessModal
  ],
  entryComponents: [
    PublishModal,
    PublishConfirmModal,
    PublishSuccessModal
  ],
  providers: [EmployeeService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
