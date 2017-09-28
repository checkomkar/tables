import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
//import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "@uirouter/angular";
import { MenuMoreComponent } from './menu-more/menu-more.component';
import { HeaderComponent } from './header/header.component';
import { AngDatatablesComponent } from './ang-datatables/ang-datatables.component';
import { AboutComponent } from './about/about.component';
import { SalesComponent } from './sales/sales.component';
import { NewShipRequestComponent } from './new-ship-request/new-ship-request.component';
import { SearchFilterPipe } from './services/app.service.searchFilterPipe';
import { ShipmentRequestComponent } from './shipment-request/shipment-request.component';
import { HeadersComponent } from './headers/headers.component';
import { TabsProtocolMasterComponent } from './tabs-protocol-master/tabs-protocol-master.component';
import { LoginComponent } from './login/login.component';

let loginState = { name: 'home', url: '/',  component: LoginComponent }; 
let headersState = { name: 'headers', url: '/',  component: HeadersComponent }; 
let salesState = { name: 'sales', url: '/new-shipment-request',  component: SalesComponent }; 
let aboutState = { name: 'about', url: '/about',  component: AboutComponent };
let shipmentRequestState = { name: 'shipment-request', url: '/shipment-request',  component: ShipmentRequestComponent };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngDatatablesComponent,
    AboutComponent,
    SalesComponent,
    NewShipRequestComponent,
    SearchFilterPipe,
    ShipmentRequestComponent,
    MenuMoreComponent,
    HeadersComponent,
    TabsProtocolMasterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    UIRouterModule.forRoot({ states: [ loginState, headersState, salesState, aboutState, shipmentRequestState ], useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
