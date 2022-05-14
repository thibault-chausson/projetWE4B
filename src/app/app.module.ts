import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyMenuBarComponent } from './my-menu-bar/my-menu-bar.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselIndexComponent,
    MyFooterComponent,
    MyMenuBarComponent,
    CardCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
