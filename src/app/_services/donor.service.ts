import { Injectable } from '@angular/core';
import { Donor } from '../_models/donor';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DonorService {
	private donorsUrl = "/api/donors";
    private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  
  
/* http request to get list of all donors with get method */
  getDonors(): any{
	  console.log("API:"+this.donorsUrl);
	  
	  
     return this.http.get(this.donorsUrl)
	         .map(res => res.json());             
  
    }

/* http get method to get the donor object for the provided id */	
getDonor(id: any) {
 
 const url = `${this.donorsUrl}/${id}`;

 return this.http.get(url)
    .map(res => res.json()); 
}

/* http request to update donor details using put method */	
updateDonor(donor: Donor,id: any) {
  const url = `${this.donorsUrl}/${id}`;
   console.log('Url is :'+url);
  return this.http
    .put(url, donor, {headers: this.headers})
    .map(res => res.json()); 
}

/* http request to create  donor object using post method */	
createDonor(donor: Donor): any {

  return this.http
    .post(this.donorsUrl, donor, {headers: this.headers})
    .map(res => res.json());
	
}
/* http request to delete  donor object identified by donor id using delete method */
deleteDonor(id: any): any {
  const url = `${this.donorsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
     .map(res => res.json());
    
}
 
  
  
  
  
  

}
