import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { Rentals } from '../models/Rentals.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-rentaldetails',
  templateUrl: './rentaldetails.page.html',
  styleUrls: ['./rentaldetails.page.scss'],
})
export class RentaldetailsPage implements OnInit {

  private propertyID: number;
  public nameOfProperty: string;
  public rental: Rentals = new Rentals();
  public currentProperty: Rentals;
  public bookingList:  Array<Booking> = [];

  constructor(
      private activatedRoute: ActivatedRoute,
      private propertyService: PropertyService,
      private navCtrl: NavController,
      private httpClient: HttpClient
    ) { 
      // this.propertyService.getAllRentals();
    }


  
  navToEdit(){
    this.navCtrl.navigateForward('edit');
  }
  ngOnInit() {

    let arrow = (data: any) => {
      // this.nameOfProperty = data.params.propertyLoc;
      this.propertyID = data.params.propertyID;
      this.httpClient.get("http://localhost:3000/properties/get/" + this.propertyID) //localStorage.getItem("property_id"))
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rental = response;
        }
      );
      // this.currentProperty =
      //   this.propertyService.findRentalByID(this.propertyID);
    };
    
    this.httpClient.get("http://localhost:3000/bookings/getreq/" + this.propertyID)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.bookingList = response;
      },
      (err) => {
        if(err.error.message) {
          console.log(err);
        }
      }
    );

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );

    console.log("Getting bookings");

    
          

  }

}
