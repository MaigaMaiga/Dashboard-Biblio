import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { LoginComponent } from './login/login.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionDomaineComponent } from './gestion-domaine/gestion-domaine.component';
import { GestionLibrarieComponent } from './gestion-librarie/gestion-librarie.component';
import { GestionLivreComponent } from './gestion-livre/gestion-livre.component';

const routes: Routes = [
  {path:"ajouterlivre",component:AjouterlivreComponent},
  {path:"",component: LoginComponent},
  { path:"accueil",component: AccueilComponent},
  { path:"gestioncategorie",component:GestionCategorieComponent},
  { path:"gestiondomaine",component:GestionDomaineComponent},
  { path:"gestionlibrairie",component: GestionLibrarieComponent},
  { path:"gestionlivre",component: GestionLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
