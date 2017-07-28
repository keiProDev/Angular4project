import { Component, OnInit ,Output , EventEmitter } from '@angular/core';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle = "My Rosters";
   constructor(public nav: NavbarService) {
    
  }
  ngOnInit() {
    
  }
  changePage(page_title){
    this.pageTitle = page_title;
  }
}

