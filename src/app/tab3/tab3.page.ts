import { Component } from '@angular/core';
import { Rentals } from '../models/Rentals.model'
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public rentalList:  Array<Rentals> = [];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private httpClient: HttpClient) {

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
}
