import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider.model';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public provider: Provider = new Provider();
  id: number;

  constructor(
    public alertController: AlertController,
    private actRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) { 

      
    }

  async presentAlertPhone() {
    const alert = await this.alertController.create({
      header: `${this.provider.name}'s Phone Number`,
      subHeader: 'Cell',
      message: `Press call to speak with ${this.provider.name}.`,
      buttons: ['Cancel', 'Call']
    });

    await alert.present();
  }
  async presentAlertEmail() {
    const alert = await this.alertController.create({
      header: `${this.provider.name}'s Email Address`,
      subHeader:`${this.provider.email}`,
      message: `Press button below to email ${this.provider.name}.`,
      buttons: ['Cancel', 'Email']
    });

    await alert.present();
  }

  ngOnInit() {
    this.actRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const providerId = localStorage.getItem("provider_id");
        console.log("PROFILE PROVIDER ID: ", providerId);
        
        this.httpClient
          .get("http://localhost:3000/providers/get/" + providerId)
          .subscribe(
            (response: Provider) => {
              console.log(response);
              this.provider.id = response.id;
              this.provider.name = response.name;
              this.provider.email = response.email;
            }
          );

    

        
      }
    );
  }

}
