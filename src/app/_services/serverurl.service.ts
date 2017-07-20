import { Injectable } from '@angular/core';

@Injectable()
export class ServerurlService {

serverUrl:String;	
	

  constructor() { }
  
  getUrl(){
	return this. serverUrl; 
  }
  
  setUrl(url:String){
	this.serverUrl=url;  
	  
  }

}
