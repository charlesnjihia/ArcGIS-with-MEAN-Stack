import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from '../app.component';
import { MapComponent } from '../map/map.component';
import { UpdateDonorComponent } from '../update-donor/update-donor.component';
 
const routes: Routes = [
  {
  path: 'donor/:id',
  component: UpdateDonorComponent
 },
   {
    path: '',
    component: MapComponent
  },
  {
  path: 'map',
  component: MapComponent
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}