import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";
import {AppComponent} from "./app.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {DomainesComponent} from "./domaines/domaines.component";
import {CategoriesComponent} from "./categories/categories.component";
import {RecherchesComponent} from "./recherches/recherches.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {RegisterProComponent} from "./register-pro/register-pro.component";
import {AfficherActiviteComponent} from "./afficher-activite/afficher-activite.component";
import {GestionProComponent} from "./gestion-pro/gestion-pro.component";
import {StatistiquesGestionProComponent} from "./statistiques-gestion-pro/statistiques-gestion-pro.component";
import {AddActiviteGestionProComponent} from "./add-activite-gestion-pro/add-activite-gestion-pro.component";
import {ProfilGestionProComponent} from "./profil-gestion-pro/profil-gestion-pro.component";
import {ActivitesGestionProComponent} from "./activites-gestion-pro/activites-gestion-pro.component";
import {
  ModifierActiviteGestionProComponent
} from "./modifier-activite-gestion-pro/modifier-activite-gestion-pro.component";
import {AuthGuard} from "./auth.guard";
import {Error404Component} from "./error404/error404.component";


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);


const route: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'domaines/:id', component: DomainesComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'recherches', component: RecherchesComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'login', component: RecherchesComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'register-pro', component: RegisterProComponent},
  {path: 'afficher-activite/:id', component: AfficherActiviteComponent},
  {
    path: 'gestion-pro',
    component: GestionProComponent,
    children: [{path: '', component: StatistiquesGestionProComponent},
      {path: 'statistiques', component: StatistiquesGestionProComponent},
      {path: 'addActivite', component: AddActiviteGestionProComponent},
      {
        path: 'profil',
        component: ProfilGestionProComponent,
        canActivate: [AngularFireAuthGuard],
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'activites',
        component: ActivitesGestionProComponent,
        children: [{path: 'modifierActivite/:id', component: ModifierActiviteGestionProComponent},],
        canActivate: [AngularFireAuthGuard],
        runGuardsAndResolvers: 'always',
      },
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'pro'
    }
  },
  {
    path: 'add-activite',
    component: AddActiviteGestionProComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [
    RouterModule.forRoot(route, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: "reload"}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
