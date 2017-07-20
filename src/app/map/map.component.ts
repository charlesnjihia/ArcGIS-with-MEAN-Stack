import { Component, OnInit,ElementRef } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import { Donor } from '../_models/donor';


import { EsriLoaderService } from 'angular2-esri-loader';
import { DonorService } from '../_services/donor.service';
import { DialogService } from "ng2-bootstrap-modal";


import { NewdonorComponent } from '../newdonor/newdonor.component';
import { DonersavedalertComponent } from '../donersavedalert/donersavedalert.component';
import { Socket } from 'ng2-socket-io';





@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',      
  styleUrls: ['./map.component.css'],
  
})

export class MapComponent implements OnInit {
 	donor: Donor;	
    donors:Donor[];	
	map: any;
	search: any;
    view: any;
	lon:Number;
	lat:Number;
	features:any[];
	symbol: any;
	featureLayer:any;
	template:any;
	fields:any;
	
	
	
	

  constructor(private dialogService:DialogService,private elRef:ElementRef, private esriLoader:EsriLoaderService,private donorService:DonorService) {
	/* update the server url to enable other components communicate with it  via socket   */
	
	  
 /*fetch the donor details from the server */
	  this.onGetDonors();
	  
	}
  
	
	
	
	
 

/* on mapview click display modal to add new donor details */ 
  showNewDonorModal() {
    this.dialogService.addDialog(NewdonorComponent, {
      title:'New Donor Details'
      })
      .subscribe((newDonor)=>{
		  if(newDonor!=null){
		  this.donor=newDonor;	  
		  this.donor.lon=this.lon;
		  this.donor.lat=this.lat;	  
		  
		  this.onAddDonor(); 
		  }		  
		  
		  
		
      });
  }
  
  /* method to display server response as an alert */
   showAlert(mes:String,bool:boolean) {
    this.dialogService.addDialog(DonersavedalertComponent, {title:bool, message:mes});
  }

  
 /* method to add donor details to the servier via donor service   */
 onAddDonor(){
 this.donorService.createDonor(this.donor).subscribe(
     donor =>{
		 this.donor=donor;
		 this.onGetDonors();
         let donorUrl="Use this link to update your details:"+window.location.href+"/donor/"+this.donor._id;
         this. showAlert(donorUrl,true) ;	 
		 },
	 error => {this.showAlert("Problem adding donor details.please try again",false) ;},
	() => console.log('Completed!')
  );
 }
 
 /* method to fetch all donors from the server */
 onGetDonors(){
 this.donorService.getDonors().subscribe(
     donors =>	 {
		 this.donors =donors;	     
	 },
	 error => console.error('Error: ' + error),
	() => console.log('Completed!')
	
  ); 
  }
  
  

  ngOnInit() {
  
	  
	/* call the esri loader service to load the map.register click events on the scene view and collect the event location  */  
	 this.esriLoader.load({
      url: '//js.arcgis.com/4.3'
    }).then(() => {
      this.esriLoader.loadModules(['esri/Map', 'esri/views/SceneView','esri/widgets/Search','esri/geometry/Point','esri/Graphic','esri/symbols/SimpleMarkerSymbol','esri/layers/FeatureLayer','esri/PopupTemplate'])
        .then(([Map, SceneView,Search,Point,Graphic,SimpleMarkerSymbol,FeatureLayer,PopupTemplate]) => {
          this.map = new Map({
             basemap: "streets",    		 
			 zoom: 16,
			 
          });
         // this.map.add(this.points.pointsLayer)
          this.view = new SceneView({
            container: this.elRef.nativeElement.firstChild,
            map: this.map
          });
		  
		  /* define the search widget and add it to the view */
		  this.search = new Search({
			  view: this.view    		 
          });
		  this.view.ui.add(this.search, "top-right");
		  /* define the symbol */
		  this.symbol= new SimpleMarkerSymbol({
				style: 'circle',
				size: 12,
				color: '#000000'
           });
		  
		  this.features=new Array();
		  
		 this.donors.map((donor: Donor) => {
			   
			   let g = new Graphic({
					  geometry: new Point({
						x: donor.lon,
						y: donor.lat,
						spatialReference: 4326
					  }),
					  attributes: {
						"idN": donor._id,
						 "Name": donor.first_name+" "+donor.last_name,
						 "Contact": donor.contact_number,
						 "Email": donor.email_address,
						 "BloodGroup": donor.blood_group
					  },
					  symbol: this.symbol
					}); 
          			
           this.features.push(g);
           }); 
		   
		   
		 this.fields= [{
                 name:"idN",
				 type:"oid",
                 visible: false
              },{
                name: "Name",
				type :"string",
                visible: true
              }, {
                name: "Contact",
                type: "string",
                visible: true
              }, {
                name: "Email",
                type: "string",
                visible: true
              },{
                name: "BloodGroup",
                type: "string",
                visible: true
              }]
		  
		            
		  
		
		this.featureLayer=new FeatureLayer({
         source: this.features,
		 fields: this.fields,
		 objectIdField: "idN",  
         geometryType: "Point"
        });
		this.template=PopupTemplate({
		title:"Donor Details",
        content:"<b>Name:</b> {Name}<br/>" +
                "<b>Contact:</b><div><a onClick='this.parentElement.innerHTML=\"{Contact}\"'>click to view</a></div><br/>" +
                "<b>Email:</b><div><a onClick='this.parentElement.innerHTML=\"{Email}\"'>click to view</a></div><br/>" +
                "<b>Blood Group:</b> {BloodGroup}<br/>" 	
		});
		
		  this.featureLayer.popupTemplate = this.template;
          		  
		  	
		  this.map.add(this.featureLayer);
		  
		  this.view.on('click', (event)=> {
		  this.lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
          this.lon = Math.round(event.mapPoint.longitude * 1000) / 1000; 
          this.showNewDonorModal();		  
			  
		  });
		  
		  

        });
    });
	  
	
  }
  
}


