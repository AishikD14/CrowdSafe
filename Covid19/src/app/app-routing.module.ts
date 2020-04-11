import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeatmapComponent } from './heatmap/heatmap.component';


const routes: Routes = [

  { path: '', redirectTo: 'heatmap', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MainpageComponent },
  { path: 'heatmap', component: HeatmapComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
