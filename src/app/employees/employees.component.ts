import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [];
  tooltip = [];
  pageIndex = 1;
  eCountPerPage = 13;
  totalCount = 0;
  selectedFilter = 'All';
  selectedOrder = "Filter1";
  filters = [
        {value: '0', label: 'All'},
        {value: '1', label: 'Filter1'},
        {value: '2', label: 'Filter2'},
        {value: '3', label: 'Filter3'}
  ];
  orderFilters =[
        {value: '1', label: 'Filter1'},
        {value: '2', label: 'Filter2'},
        {value: '3', label: 'Filter3'}
  ];
  constructor(private employeeService:EmployeeService,public dialog: MdDialog) { }

  ngOnInit() {
    this.employeeService.fetchEmployeesData().map((response)=>response.json()).subscribe(
      (data)=> {
        this.employees = data
        this.totalCount = Math.ceil(this.employees.length / this.eCountPerPage);
      }
    );
  }
  getEmployees(){
    return this.employees.filter((item,index)=>index<this.eCountPerPage*this.pageIndex && index>this.eCountPerPage*(this.pageIndex-1));
  }
  getNextPage(){
    if (this.pageIndex<this.totalCount) this.pageIndex++;
  }
  getPreviousPage(){
    if (this.pageIndex>1) this.pageIndex--;
  }
  showToolTip(index){
    if (this.tooltip[index]==true){
      this.tooltip=[];
    
    }else{
        this.tooltip=[];
        this.tooltip[index]=true;
    }

  }
  openInviteDialog() {
    this.tooltip=[];
    let psDialogRef = this.dialog.open(InviteModal, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '480px',
      height: '430px'
    });
  }
}

@Component({
  selector: 'invite-modal',
  templateUrl: './invitemodal.component.html'
})


export class InviteModal {
  psOptions = [
    'No Notification',
    'Send by Email',
    'Send by SMS',
    'Send by Email and Smartphone push notification',
    'Send by Email and SMS'
  ];
  psTypeValue = 'No Notification';
  constructor(public dialogRef: MdDialogRef<InviteModal>) { }
 
}