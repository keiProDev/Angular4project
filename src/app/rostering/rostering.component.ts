import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-rostering',
  templateUrl: './rostering.component.html',
  styleUrls: ['./rostering.component.css']
})

export class RosteringComponent implements OnInit {
  constructor(public dialog: MdDialog) { }
  expendViewAll = true;
  expendView1 = true;
  expendView2 = true;
  expendView3 = false;
  mexpendView1 = true;
  mexpendView2 = true;
  mexpendView3 = false;
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
  ngOnInit() {
  }

  openPublishDialog() {
    let psDialogRef = this.dialog.open(PublishModal, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '480px',
      height: '430px'
    });
  }
  expendToggle(){
     this.expendViewAll = !this.expendViewAll;
     if (this.expendViewAll==true){
        this.expendView1 = true;
        this.expendView2 = true;
        this.expendView3 = true;
     }else{
        this.expendView1 = false;
        this.expendView2 = false;
        this.expendView3 = false;
     }
  }


}

@Component({
  selector: 'publish-modal',
  templateUrl: './publishmodal.component.html'
})


export class PublishModal {
  psOptions = [
    'No Notification',
    'Send by Email',
    'Send by SMS',
    'Send by Email and Smartphone push notification',
    'Send by Email and SMS'
  ];
  psTypeValue = 'No Notification';
  constructor(public dialogRef: MdDialogRef<PublishModal>,public cdialog: MdDialog
  ) { }
  openConfirm(){
    let psConfirmDialogRef = this.cdialog.open(PublishConfirmModal, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '480px',
      height: '320px'
    });
  }
}

@Component({
  selector: 'publish-confirm-modal',
  templateUrl: './publishconfirmmodal.component.html'
})


export class PublishConfirmModal {
  agreeOptions = [
    'Yes',
    'No'
  ];
  psTypeValue='Yes';
  constructor(public dialogRef: MdDialogRef<PublishConfirmModal>,public sdialog: MdDialog
  ) { }
  openSuccess(){
    let psConfirmDialogRef = this.sdialog.open(PublishSuccessModal, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'success-overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '480px',
      height: '396px'
    });
  }
}


@Component({
  selector: 'publish-success-modal',
  templateUrl: './publishsuccessmodal.component.html'
})


export class PublishSuccessModal {
  constructor(public dialogRef: MdDialogRef<PublishSuccessModal>,
  ) { }

}