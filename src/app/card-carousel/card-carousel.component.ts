import {Component, OnInit, Input} from '@angular/core';
import {Activite} from "../classes/activites";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Carouselinfo} from "../classes/carouselinfo";
import {AccueilService} from "../services/accueil/accueil.service";


@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {


  nom: string = '';
  description: string = '';
  identifiant: string = '';
  date: string = '';
  photo: any;

  activiteArray: Activite[] = [];

  @Input() carouse!: Carouselinfo;


  filtersLoaded2!: Promise<boolean>;

  constructor(private _sanitizer: DomSanitizer, private db: AngularFirestore, private auth: AngularFireAuth, private accueil: AccueilService) {
  }

  ngOnInit(): void {
    this.accueil.afficheActiviteLittleCarousel(this);

  }


}
