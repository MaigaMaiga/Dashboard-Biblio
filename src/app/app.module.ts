import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionLivreComponent } from './gestion-livre/gestion-livre.component';
import { GestionLibrarieComponent } from './gestion-librarie/gestion-librarie.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionDomaineComponent } from './gestion-domaine/gestion-domaine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AjouterlivreComponent,
    LoginComponent,
    AccueilComponent,
    GestionLivreComponent,
    GestionLibrarieComponent,
    GestionCategorieComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
