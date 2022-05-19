import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login/login.component';
import {FirebaseService} from "./services/firebase.service";
import { RegisterUserComponent } from './register-user/register-user.component';

const route:Routes=[
 {path:'connexion', component:ConnexionComponent},
  {path:'accueil', component:AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'accueil', component: AccueilComponent },
  {path: 'register', component : RegisterUserComponent},
  {path:'',redirectTo:'/accueil', pathMatch:'full'},
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
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route),
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
