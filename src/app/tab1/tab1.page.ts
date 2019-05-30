import { Component } from '@angular/core';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Rentals } from '../models/Rentals.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  
  public rentalList:  Array<Rentals> = [];

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService ) {

    this.propertyService.getAllRentals();
    this.rentalList = this.propertyService.rentalS;
  }




  navToLogin(){
    this.navCtrl.navigateForward('login');
  }

  navToProperty(property: Rentals){
      this.navCtrl
        .navigateForward('rentaldetails', {
          queryParams: {
            q: "ionic",
            propertyLoc: property.location,
            propertyID: property.id
          }
        } );
}
}

// navToProperty(property: Rentals){
    

//   this.navCtrl
//     .navigateForward('property-details', {
//       queryParams: {
//         q: "ionic",
//         propertyLoc: property.location,
//         propertyID: property.id
//       }
//     } );

