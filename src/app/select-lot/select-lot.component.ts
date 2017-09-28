import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/app.service.httpService';

@Component({
  selector: 'app-select-lot',
  templateUrl: './select-lot.component.html',
  styleUrls: ['./select-lot.component.scss'],
  providers: [HttpService]
})
export class SelectLotComponent implements OnInit {
	shipments: any;
	dataUrl = './assets/shipment-list.json';
  	constructor(private http: HttpService) { }

	ngOnInit() {
		this.http.getDataObservable(this.dataUrl).subscribe(data => {	        
	        console.log(data);
	        this.shipments = data;
	    });
	}
}
