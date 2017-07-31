import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-createaccountsuccess',
  templateUrl: './createaccountsuccess.component.html',
  styleUrls: ['./createaccountsuccess.component.css']
})
export class CreateaccountsuccessComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
