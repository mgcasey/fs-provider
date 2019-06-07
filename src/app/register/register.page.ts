import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public provider: any = {
    name: "",
    email: "",
    password: ""
  };

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
  }

  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }

  submit() {
    console.log("Submitting to the server.");
    console.log(this.provider);
    this.httpClient
      .post("http://localhost:3000/providers", this.provider)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem("provider_id", response.id);
          
          //pass by id / query param and then can get
          this.navCtrl.navigateForward('tabs', {queryParams: {
            providerId: response.id
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
      subHeader: 'Provider already exists with this email.',
      message: 'Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
