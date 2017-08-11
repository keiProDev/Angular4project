import { Component, OnInit ,Output , EventEmitter } from '@angular/core';
import {ElementRef} from "@angular/core";
import { NavbarService } from '../navbar.service';
import { trigger, state, style, transition, animate,keyframes } from '@angular/animations'
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle = "My Rosters";
   constructor(public nav: NavbarService,private _elRef:ElementRef,public dialog: MdDialog) {
    
  }
  ngOnInit():any {
    $(document).on('click', '#profileMenuBar .link-item', function() {
      $('#profileMenuBar').removeClass("collapse in").addClass("collapse");
    });
  }
  changePage(page_title){
    this.pageTitle = page_title;
    $('#subMenuBar').removeClass("collapse in").addClass("collapse");
  }
  show_sidebar(){
    this.nav.side_show();
  }
  openDialog() {
    let psDialogRef = this.dialog.open(WorkplaceModal, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '480px',
      height: '369px'
    });
  }
}
@Component({
  selector: 'workplace-modal',
  templateUrl: './workplacemodal.component.html'
})
export class WorkplaceModal {
  psOptions = [
    'No Notification',
    'Send by Email',
    'Send by SMS',
    'Send by Email and Smartphone push notification',
    'Send by Email and SMS'
  ];
  psTypeValue = 'No Notification';
  constructor( ) { }
  
}
@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-230px)', opacity: 0.5}),
          animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateX(-230px)', opacity: 0.5}))
        ])
      ]
    )
  ]
})
export class SidebarComponent implements OnInit{
  state: string = 'small';
  constructor(public nav: NavbarService) {
  
  }
  ngOnInit() {
    
  }
  hide_sidebar(){
    this.nav.side_hide();
  }

}