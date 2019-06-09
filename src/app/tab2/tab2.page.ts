import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Rentals } from '../models/Rentals.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public rental: any = {
    name: "",
    location: "",
    price: 0,
    providerId: parseInt(localStorage.getItem("provider_id")),
    picture: ""
  };

  
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private httpClient: HttpClient
    ) { 
      
     }

  ngOnInit() {
  }

  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }

  submit() {
    console.log("Submitting to the server.");
    console.log(this.rental);
    this.httpClient
      .post("http://localhost:3000/properties", this.rental)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem("rental_id", response.id);
          // const provId = localStorage.getItem("provider_id");
          // this.rental.providerId = parseInt(provId);
          //pass by id / query param and then can get
          this.navCtrl.navigateForward('tabs', {queryParams: {
            rentalId: response.id
          }}); 
        },
        (err) => {
          if(err.error.message) {
            if(err.error.message.indexOf("Duplicate entry") != -1){
              this.presentAlert();
            }
          }
          //could also do
          // alert(err.error.message);
        }
      );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Rental already exists with this information.',
      message: 'Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
