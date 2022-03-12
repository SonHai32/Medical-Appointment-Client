import { NzMessageModule } from 'ng-zorro-antd/message';
import { InfoCompModule } from './modules/comp-modules/info-comp/info-comp.module';
import { PatientScheduleEffect } from './state-management/effects/patient-schedule.effect';
import { patientScheduleReducer } from './state-management/reducers/patient-schedule.reducer';
import { HttpJwtIntercepter } from './helpers/http-jwt-intercepter.helper';
import { RegisterCompModule } from './modules/comp-modules/register-comp/register-comp.module';
import { LoginCompModule } from './modules/comp-modules/login-comp/login-comp.module';
import { FooterCompModule } from './modules/comp-modules/footer/footer-comp.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageCompModule } from './modules/comp-modules/main-page-comp/main-page-comp.module';
import { HeaderCompModule } from './modules/comp-modules/header-comp/header-comp.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './state-management/reducers/auth.reducer';
import { AuthEffect } from './state-management/effects/auth.effect';
import { environment } from 'src/environments/environment';
import { initializer } from './helpers/initializer.helper';
import { ErrorCompModule } from './modules/comp-modules/error-comp/error-comp.module';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMessageModule,
    MainPageCompModule,
    FooterCompModule,
    HeaderCompModule,
    LoginCompModule,
    InfoCompModule,
    RegisterCompModule,
    ErrorCompModule,
    StoreModule.forRoot({
      auth: authReducer,
      patientSchedule: patientScheduleReducer,
    }),
    EffectsModule.forRoot([AuthEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [Store],
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpJwtIntercepter, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
