import { Component, OnInit } from '@angular/core';
import { CheckoutServiceService } from '../service/checkout-service.service';
import { prepareResult } from '../Models/prepareModel';

 import { createDto}      from   'src/app/DTO/createDTO';
@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css']
})
export class PrepareComponent implements OnInit {

  constructor(private checkout:CheckoutServiceService) { }

  eventTickets:prepareResult;
  EventCreation: createDto;

  ngOnInit() {
    this.checkout.getEventPrepare()
    .subscribe(data=>{
      this.eventTickets =data;
      console.log(this.eventTickets);
    }
    );

  }


  createTicket(){

    this.EventCreation.

    console.log('test_Data');
  }

}
