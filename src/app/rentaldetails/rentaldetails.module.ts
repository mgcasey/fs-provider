import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentaldetailsPage } from './rentaldetails.page';

const routes: Routes = [
  {
    path: '',
    component: RentaldetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentaldetailsPage]
})
export class RentaldetailsPageModule {}
