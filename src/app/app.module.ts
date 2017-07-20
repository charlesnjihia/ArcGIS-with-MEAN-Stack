import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppRoutingModule }     from './app-routing/app-routing.module';

import { EsriLoaderService } from 'angular2-esri-loader';
import { DonorService } from './_services/donor.service';
import { ServerurlService } from "./_services/serverurl.service";


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NewdonorComponent } from './newdonor/newdonor.component';
import { DonersavedalertComponent } from './donersavedalert/donersavedalert.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';

//import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io'; 
//const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NewdonorComponent,
    DonersavedalertComponent,
    UpdateDonorComponent
  ],
 
  imports: [
    BrowserModule,
	RouterModule,
	HttpModule,
	FormsModule,
	BootstrapModalModule,
	JsonpModule,
	AppRoutingModule
	 
  
  ],
  providers: [EsriLoaderService,DonorService,ServerurlService],
  entryComponents: [
        NewdonorComponent,DonersavedalertComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
