import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hospital',
    loadChildren: () =>
      import('./modules/core-modules/hospital.module').then(
        (m) => m.HospitalModule
      ),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./modules/core-modules/booking.module').then(
        (m) => m.BookingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
