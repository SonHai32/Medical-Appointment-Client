import { InfoComponent } from './pages/info/info.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './helpers/guards/auth.guard';
import { ErrorComponent } from './pages/error/error.component';

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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'hospital',
    loadChildren: () =>
      import('./modules/core-modules/hospital.module').then(
        (m) => m.HospitalModule
      ),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/core-modules/user.module').then((m) => m.UserModule),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./modules/core-modules/doctors.module').then(
        (m) => m.DoctorsModule
      ),
  },
  {
    path: 'booking',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/core-modules/booking.module').then(
        (m) => m.BookingModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
