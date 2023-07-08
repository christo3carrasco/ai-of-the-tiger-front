import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home-module/home/home.component';
import { UserSigninComponent } from './components/user-module/user-signin/user-signin.component';
import { UserSignupComponent } from './components/user-module/user-signup/user-signup.component';
import { UserProfileComponent } from './components/user-module/user-profile/user-profile.component';
import { RoutineMainComponent } from './components/routine-module/routine-main/routine-main.component';
import { DietMainComponent } from './components/diet-module/diet-main/diet-main.component';
import { MotivationMainComponent } from './components/motivation-module/motivation-main/motivation-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: UserSigninComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'routine', component: RoutineMainComponent },
  { path: 'diet', component: DietMainComponent },
  { path: 'motivation', component: MotivationMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
