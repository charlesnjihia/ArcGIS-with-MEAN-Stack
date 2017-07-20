import { Component, OnInit,Directive, forwardRef, 
           Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
           Validators,AbstractControl,ValidatorFn } from '@angular/forms';		   
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Jsonp} from '@angular/http';
import { Donor } from '../_models/donor';
import 'rxjs/add/operator/map';
export interface PromptModel {
  title:string;
  
}

@Component({
  selector: 'app-newdonor',
  templateUrl: './newdonor.component.html',
  styleUrls: ['./newdonor.component.css']
})
export class NewdonorComponent extends DialogComponent<PromptModel, Donor> implements PromptModel, OnInit {
 title: string;
 donor : Donor;
 newDonor: Donor=new Donor();
 ipResponse:any=null;
 
 
 
  constructor(dialogService: DialogService,private jsonp: Jsonp) { super(dialogService);}

  ngOnInit() {
	this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK').subscribe(response => {
		this.newDonor.ip_address=response.json().ip;
		
	});
	
	
  }
   onAddDetails() {
	  
	   
    this.result = this.newDonor;
    this.close();
  }

}
