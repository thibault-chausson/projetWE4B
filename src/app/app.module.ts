import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';

const route:Routes=[
 {path:'connexion', component:ConnexionComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'',redirectTo:'/accueil', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselIndexComponent,
    MyFooterComponent,
    CardCarouselComponent,
    AccueilComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
