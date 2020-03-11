import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  pType : string;
  msg = null;
  passengers = [
    {name: 'passenger 1', ticketType: 'Premium'},
    {name: 'passenger 2', ticketType: 'Firstclass'},
    {name: 'passenger 3', ticketType: 'Secondclass'},
  ];

  constructor() { }

  ngOnInit() {
  }

  setType(type:string) {
    this.msg = null;
    this.pType = type;
  }

  allList() {
    this.pType = null;
    this.msg = 'all';
  }
}