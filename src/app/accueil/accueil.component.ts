import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {Carouselinfo} from "../classes/carouselinfo";
import {AccueilService} from "../services/accueil/accueil.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nom: string = '';
  description: string = '';
  identifiant: string = '';
  date: string = '';
  photo: any;
  prix : number = 0;
  filtersLoaded!: Promise<boolean>;


  ActiviteArray: ActivitesPres[] = [];

  carouselCard1 !:Carouselinfo;
  carouselCard2 !:Carouselinfo;

  constructor(private accueil : AccueilService) {
  }

  ngOnInit(): void {
    this.carouselCard1 = new Carouselinfo("jour", "carouselExampleDark1");
    this.carouselCard2 = new Carouselinfo("inputPrix", "carouselExampleDark2");
    this.accueil.afficheActiviteBigCarousel(this);

  }


}
