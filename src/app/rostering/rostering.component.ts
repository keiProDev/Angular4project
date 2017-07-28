import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-rostering',
  templateUrl: './rostering.component.html',
  styleUrls: ['./rostering.component.css']
})

export class RosteringComponent implements OnInit {
  constructor(public dialog: MdDialog) { }
  expendView = true;
  expendView1 = true;
  expendView2 = false;
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