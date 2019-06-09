import { Component } from '@angular/core';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Rentals } from '../models/Rentals.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  
  public rentalList:  Array<Rentals> = [];

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService,
    private httpClient: HttpClient ) {

    // this.propertyService.getAllRentals();
    // this.rentalList = this.propertyService.rentalS;
  }


  ngOnInit(){
    console.log("Getting properties");
    this.httpClient.get("http://localhost:3000/properties/getbyproviderid/" + localStorage.getItem("provider_id"))
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rentalList = response;
        }
      );
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
  navToEdit(property: Rentals){
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          propertyID: property.id
        }
      });

  }


}

