import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'rentaldetails', loadChildren: './rentaldetails/rentaldetails.module#RentaldetailsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
