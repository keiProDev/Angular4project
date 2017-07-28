import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor() { }
  todolist=[{
    title:"DECLINED SHIFT",
    name:"Julia Jones-Wilson",
    time:"Mon 24/04 in Admin 9am-5:30pm",
    reason:"It's my birthday...",
    action:false
  },{
    title:"DECLINED SHIFT",
    name:"Lee Atkins",
    time:"Mon 24/04 in Admin 9am-5:30pm",
    reason:"Hangover",
    action:false
  },{
    title:"DECLINED SHIFT",
    name:"Matt Freeman",
    time:"Mon 24/04 in Admin 9am-5:30pm",
    reason:"Prior engagement",
    action:false
  },{
    title:"DECLINED SHIFT",
    name:"Lee Atkins",
    time:"Mon 24/04 in Admin 9am-5:30pm",
    reason:"something",
    action:true
  }]
  search="";
  ngOnInit() {
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todoSearch',
    pure: false
})
export class TodoSearchPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.name.indexOf(filter) !== -1);
    }
}
