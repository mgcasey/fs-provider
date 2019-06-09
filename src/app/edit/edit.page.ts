import { Component, OnInit } from '@angular/core';
import { Rentals } from '../models/Rentals.model';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {


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
