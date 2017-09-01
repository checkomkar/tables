import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule, Response} from '@angular/http';
import {HttpService} from './services/app.service.httpService'
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [HttpService, HttpModule]
})

export class AppComponent implements OnInit{
	title = 'Cool';
    items: any;
    dtOptions: DataTables.Settings = {};
    private dataUrl = './assets/sample-data.json';  // URL to web api
    testResponse: any;
    //dtTrigger: Subject = new Subject();
	constructor(private http: HttpService) {

    }

    ngOnInit() {
        this.http.getDataObservable(this.dataUrl).subscribe(data => {
            this.testResponse = data;
            console.log(this.testResponse);
            this.items = data;
        });
    }

}
