import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface AlertModel {
  title: boolean;
  message: string;
}

@Component({
  selector: 'app-donersavedalert',
  templateUrl: './donersavedalert.component.html',
  styleUrls: ['./donersavedalert.component.css']
})
export class DonersavedalertComponent extends DialogComponent<AlertModel, null> implements AlertModel, OnInit {
  title: boolean;
  message: string;
  constructor(dialogService: DialogService) { super(dialogService); }

  ngOnInit() {
  }

}
