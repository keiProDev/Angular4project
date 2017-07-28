import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-businessdetail',
  templateUrl: './businessdetail.component.html',
  styleUrls: ['./businessdetail.component.css']
})
export class BusinessdetailComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
