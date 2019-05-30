import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { Rentals } from '../models/Rentals.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-rentaldetails',
  templateUrl: './rentaldetails.page.html',
  styleUrls: ['./rentaldetails.page.scss'],
})
export class RentaldetailsPage implements OnInit {

  private propertyID: number;
  public nameOfProperty: string;
  public rentalList:  Array<Rentals> = [];
  public currentProperty: Rentals;

  constructor(
      private activatedRoute: ActivatedRoute,
      private propertyService: PropertyService,
      private navCtrl: NavController
    ) { 
      this.propertyService.getAllRentals();
    }


  
  navToEdit(){
    this.navCtrl.navigateForward('tabs/tab3');
  }
  ngOnInit() {

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyLoc;
      this.propertyID = data.params.propertyID;

      this.currentProperty =
        this.propertyService.findRentalByID(this.propertyID);
    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );

  }

}
