import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './components/shared/angular-material/material.module';
import { HomeComponent } from './components/home-module/home/home.component';
import { UserSigninComponent } from './components/user-module/user-signin/user-signin.component';
import { UserSignupComponent } from './components/user-module/user-signup/user-signup.component';
import { UserProfileComponent } from './components/user-module/user-profile/user-profile.component';
import { RoutineMainComponent } from './components/routine-module/routine-main/routine-main.component';
import { RoutineModComponent } from './components/routine-module/routine-mod/routine-mod.component';
import { DietModComponent } from './components/diet-module/diet-mod/diet-mod.component';
import { DietMainComponent } from './components/diet-module/diet-main/diet-main.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserSigninComponent, UserSignupComponent, UserProfileComponent, RoutineMainComponent, RoutineModComponent, DietModComponent, DietMainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
