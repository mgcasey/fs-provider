import { Injectable } from '@angular/core';
import { Rentals } from '../models/Rentals.model';

@Injectable({
  providedIn: 'root' //make available across all pages by providing in root app
})


//singleton so that have central space for data and don't need to 
//keep repeating as array
export class PropertyService {

  public rentalS: Array<Rentals> = [];


  constructor() { }

  
  //responsible for getting all data
  getAllRentals() {
    this.rentalS = [];


    let rental1 = new Rentals();
    rental1.accomodation = "Back to Lisbon";
    rental1.location = "Lisbon, Portugal";
    rental1.price = 100;
    rental1.rentReview = "Best month of my life!"
    rental1.picture = "https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg";
    rental1.avail = true;
    rental1.rating = 4.9;
    rental1.id = 1;


    let rental2 = new Rentals();
    rental2.accomodation = "The Plaza";
    rental2.location = "New York City, USA";
    rental2.price = 800;
    rental2.rentReview = "Great week in the Big Apple. Would definitely stay here again."
    rental2.picture = "https://www.theplazany.com/wp-content/uploads/2016/02/Royal-Suite-2-1.jpg";
    rental2.avail = false;
    rental2.rating = 4.7;
    rental2.id = 2;


    let rental3 = new Rentals();
    rental3.accomodation = "Hiking Abode";
    rental3.location = "Torres del Paine, Chile";
    rental3.price = 200;
    rental3.rentReview = "Loved the cabin. So cozy and great location to go hiking from the place.";
    rental3.picture = "http://static.trip101.com/paragraph_media/pictures/000/708/023/large/2d677f8b-7ac9-482e-ba20-2ce25532016b.jpg?1522643331";
    rental3.avail = false;
    rental3.rating = 4.2;
    rental2.id = 3;

  
    this.rentalS.push(rental1);
    this.rentalS.push(rental2);
    this.rentalS.push(rental3);

  }

  //Returns null if not found.
  findRentalByID(id: number): Rentals {
    let foundRental: Rentals = null;

    this.rentalS.forEach(
      (rental: Rentals) => {
        if(rental.id == id) {
          //display this property
          foundRental = rental;
        }
      }
    );
    return foundRental;
  }

}
