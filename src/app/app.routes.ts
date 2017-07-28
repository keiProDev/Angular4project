import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';
import { FooterComponent } from './footer/footer.component';
import { RostersComponent } from './rosters/rosters.component';
import { RosteringComponent } from './rostering/rostering.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { PasswordlinkComponent } from './passwordlink/passwordlink.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BusinessdetailComponent } from './businessdetail/businessdetail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeclineshiftComponent } from './declineshift/declineshift.component';
import { CreateaccountsuccessComponent } from './createaccountsuccess/createaccountsuccess.component';
import { CreatenewaccountComponent } from './createnewaccount/createnewaccount.component';
const appRoutes: Routes = [
    {
      path:'',
      redirectTo:'/login',
      pathMatch:'full'
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'accountcreated',
      component: CreateaccountsuccessComponent
    },
    {
      path:'newaccount',
      component:CreatenewaccountComponent
    },
    {
      path:'business',
      component: BusinessdetailComponent
    },
    {
      path:'decline',
      component: DeclineshiftComponent
    },
    {
      path:'createaccount',
      component: CreateaccountComponent
    },
    {
      path:'editprofile',
      component: EditprofileComponent
    },
    {
      path:'resetlink',
      component: PasswordlinkComponent
    },
    {
      path:'resetpassword',
      component: ResetpasswordComponent
    },
    {
      path:'forgotpassword',
      component: ForgotPasswordComponent
    },
    {
      path:'employees',
      component: EmployeesComponent
    },
    {
      path:'rosters',
      component: RostersComponent
    },
    {
      path:'rostering',
      component: RosteringComponent
    },
    {
      path:'todolist',
      component: TodolistComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);