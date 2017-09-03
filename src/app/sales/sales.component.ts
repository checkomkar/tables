import { Component, OnInit, TemplateRef } from '@angular/core';
import {HttpModule, Response} from '@angular/http';
import {HttpService} from '../services/app.service.httpService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  providers: [HttpService, HttpModule, NgbModal]
})
export class SalesComponent implements OnInit {
    closeResult: string;
    items: any;
    dtOptions: DataTables.Settings = {};
    //dtTrigger: Subject<any> = new Subject();
    private dataUrl = './assets/sample-data.json';  // URL to web api
    testResponse: any;
  	public modalRef: BsModalRef;
  	
    constructor(private http: HttpService, private modalService: BsModalService) {

    }
    
    /*open(content) {
		this.modalService.open(content).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}*/

	public openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template, {class: 'modal-md'});
	}

	/*private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return  `with: ${reason}`;
		}
	}*/

	ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            searching: true,
            pageLength: 2
        };
        this.http.getDataObservable(this.dataUrl).subscribe(data => {
            this.testResponse = data;
            //console.log(this.testResponse);
            this.items = data;
        });
    }

}
