import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { prepareResult } from '../Models/prepareModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {


    api_header: HttpHeaders = new HttpHeaders()
   .append('x-api-key','87me54yy92a8pp0a4n')
   .append('content','');
  
  apiUrl = "http://publicapi.eventxpress.net/v2/api/checkout/prepare/"


  event_id = 2138988996;
  eventdate_id = 2138983423;

  

  constructor(public http:HttpClient) { 
  }



  getEventPrepare():Observable<prepareResult>
  {
    return  this.http.get<prepareResult>(this.apiUrl+this.event_id+"/"+this.eventdate_id,{ headers: this.api_header});
  }
}
