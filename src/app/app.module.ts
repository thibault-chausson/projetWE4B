import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from "./services/firebase.service";
import { RegisterUserComponent } from './register-user/register-user.component';
import { DomainesComponent } from './domaines/domaines.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecherchesComponent } from './recherches/recherches.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterProComponent } from './register-pro/register-pro.component';
import { Error404Component} from "./error404/error404.component";
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { MenuLoggedComponent } from './menu-logged/menu-logged.component';
import { AccueilLoggedComponent } from './accueil-logged/accueil-logged.component';
import { CategoriesLoggedComponent } from './categories-logged/categories-logged.component';
import { DomaineLoggedComponent } from './domaine-logged/domaine-logged.component';
import { RecherchesLoggedComponent } from './recherches-logged/recherches-logged.component';
import {
  AngularFireAuthGuard,
  AngularFireAuthGuardModule,
  loggedIn,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { GestionProComponent } from './gestion-pro/gestion-pro.component';
import { MenuGestionProComponent } from './menu-gestion-pro/menu-gestion-pro.component';
import { StatistiquesGestionProComponent } from './statistiques-gestion-pro/statistiques-gestion-pro.component';
import { ProfilGestionProComponent } from './profil-gestion-pro/profil-gestion-pro.component';
import { ActivitesGestionProComponent } from './activites-gestion-pro/activites-gestion-pro.component';
import { AddActiviteGestionProComponent } from './add-activite-gestion-pro/add-activite-gestion-pro.component';
import { AfficherActiviteComponent } from './afficher-activite/afficher-activite.component';
import { ModifierActiviteGestionProComponent } from './modifier-activite-gestion-pro/modifier-activite-gestion-pro.component';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);


const route:Routes=[
  {path:'', redirectTo:'/accueil', pathMatch:'full'},
  { path: '',             component: AppComponent},
  { path: 'accueil',      component: AccueilComponent},
  { path: 'domaine',     component: DomainesComponent},
  { path: 'categories',     component: CategoriesComponent},
  { path: 'recherches',     component: RecherchesComponent},
  { path: 'connexion',     component: ConnexionComponent},
  { path: 'login',     component: RecherchesComponent},
  {path: 'register', component : RegisterUserComponent},
  {path: 'register-pro', component : RegisterProComponent},
  { path: 'gestion-pro',     component: GestionProComponent},
  {path: 'add-activite', component : AddActiviteComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'accueil-logged',      component: AccueilLoggedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'domaine-logged',     component: DomaineLoggedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'categories-logged',     component: CategoriesLoggedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'recherches-logged',     component: RecherchesLoggedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: '**', component : Error404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselIndexComponent,
    MyFooterComponent,
    CardCarouselComponent,
    AccueilComponent,
    ConnexionComponent,
    LoginComponent,
    RegisterUserComponent,
    DomainesComponent,
    CategoriesComponent,
    RecherchesComponent,
    MenuComponent,
    RegisterProComponent,
    AddActiviteComponent,
    MenuLoggedComponent,
    AccueilLoggedComponent,
    CategoriesLoggedComponent,
    DomaineLoggedComponent,
    RecherchesLoggedComponent,
    GestionProComponent,
    MenuGestionProComponent,
    StatistiquesGestionProComponent,
    ProfilGestionProComponent,
    ActivitesGestionProComponent,
    AddActiviteGestionProComponent,
    AfficherActiviteComponent,
    ModifierActiviteGestionProComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route , { scrollPositionRestoration: 'enabled' } ),
    AngularFireAuthGuardModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCmbXbwKnwP8IUx1Vkkt-HYgtooBotiBW8",
      authDomain: "we4b-30eb7.firebaseapp.com",
      databaseURL: "https://we4b-30eb7-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "we4b-30eb7",
      storageBucket: "we4b-30eb7.appspot.com",
      messagingSenderId: "552542801312",
      appId: "1:552542801312:web:36c899627d4c518c3228c5",
      measurementId: "G-ESJGG5DEXF"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})


export class AppModule {}
