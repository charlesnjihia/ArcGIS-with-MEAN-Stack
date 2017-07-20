import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router }            from '@angular/router';
import { Donor } from '../_models/donor';
import { DonorService } from '../_services/donor.service';
@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {
	donor: Donor;
	donorId:any;

  constructor(private donorService: DonorService,private activatedRoute: ActivatedRoute,private route: Router) { }

  
  
  
  ngOnInit() {
	  
	/* obtain the donor id from the path use it to fetch donor details from the server*/  
	 this.activatedRoute.params.subscribe((params: Params) => {
       this.donorId = params['id'];
        console.log(this.donorId);
		this.donorService.getDonor(this.donorId)
        .subscribe(donor => this.donor = donor);
      }); 
  
  }
  /* use the onUpdate() to send  the updated donor to the server */
 onUpdateDetails(){
 this.donorService.updateDonor(this.donor,this.donorId).subscribe(
     donor =>{		 
		this.route.navigate(['/']);	 
		 },
	 error => {console.log('Error updating the donor!');},
	() => console.log('Completed!')
  );
 }

 /* onDelete method to handle the delete button.takes dornor id as argument to send delete http request */  
onDelete(){
  this.donorService.deleteDonor(this.donorId).subscribe(
     donor =>{		 
		this.route.navigate(['/']);	 
		 },
	 error => {console.log('Error deleting  the donor!');},
	() => console.log('Completed!')
  );
}	 
	 
  

}
