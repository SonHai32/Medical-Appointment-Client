import { RegisterCompModule } from './modules/comp-modules/register-comp/register-comp.module';
import { LoginCompModule } from './modules/comp-modules/login-comp/login-comp.module';
import { FooterCompModule } from './modules/comp-modules/footer/footer-comp.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageCompModule } from './modules/comp-modules/main-page-comp/main-page-comp.module';
import { HeaderCompModule } from './modules/comp-modules/header-comp/header-comp.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './state-management/reducers/auth.reducer';
import { AuthEffect } from './state-management/effects/auth.effect';
import { environment } from 'src/environments/environment';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainPageCompModule,
    FooterCompModule,
    HeaderCompModule,
    LoginCompModule,
    RegisterCompModule,
    StoreModule.forRoot({
      auth: authReducer,
    }),
    EffectsModule.forRoot([AuthEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
