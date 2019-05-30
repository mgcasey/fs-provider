import { Component } from '@angular/core';


import { rentals } from '../models/rentals.model';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rentalList:  Array<rentals> = [];

  constructor(private navCtrl: NavController ) {
    let rental1 = new rentals();
    rental1.accomodation = "Back to Lisbon";
    rental1.location = "Lisbon, Portugal";
    rental1.price = 100;
    rental1.rentReview = "Best month of my life!"
    rental1.picture = "https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg";
    rental1.address = "R. de Santo Amaro 34, 1200-803 Lisboa";
    rental1.avail = true;
 

    let rental2 = new rentals();
    rental2.accomodation = "The Plaza";
    rental2.location = "New York City, USA";
    rental2.price = 800;
    rental2.rentReview = "Great week in the Big Apple. Would definitely stay here again."
    rental2.picture = "https://www.theplazany.com/wp-content/uploads/2016/02/Royal-Suite-2-1.jpg";
    rental2.address = "768 5th Ave, New York, NY 10019, USA";
    rental2.avail = false;

    let rental3 = new rentals();
    rental3.accomodation = "Hiking Abode";
    rental3.location = "Torres del Paine, Chile";
    rental3.price = 200;
    rental3.rentReview = "Loved the cabin. So cozy and great location to go hiking from the place.";
    rental3.picture = "http://static.trip101.com/paragraph_media/pictures/000/708/023/large/2d677f8b-7ac9-482e-ba20-2ce25532016b.jpg?1522643331";
    rental3.address = "Sector Lago Grey S/N, Torres del Paine, Torres de Paine, Magallanes, Chile";
    rental3.avail = true;


    this.rentalList.push(rental1);
    this.rentalList.push(rental2);
    this.rentalList.push(rental3);


  }



  navToDetails(){
    this.navCtrl.navigateForward('rentaldetails');
  }

}
