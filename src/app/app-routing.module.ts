import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"ajouterlivre",component:AjouterlivreComponent},
  {path:"",component: LoginComponent},
  { path:"accueil",component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
