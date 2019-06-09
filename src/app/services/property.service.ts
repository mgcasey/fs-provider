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
