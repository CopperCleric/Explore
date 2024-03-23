import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTripComponent } from './pages/createtrip/createtrip.component';
export const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'trip', component: CreateTripComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }