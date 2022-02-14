import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionLivreComponent } from './gestion-livre/gestion-livre.component';
import { GestionLibrarieComponent } from './gestion-librarie/gestion-librarie.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionDomaineComponent } from './gestion-domaine/gestion-domaine.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterlivreComponent,
    LoginComponent,
    AccueilComponent,
    GestionLivreComponent,
    GestionLibrarieComponent,
    GestionCategorieComponent,
    GestionDomaineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
