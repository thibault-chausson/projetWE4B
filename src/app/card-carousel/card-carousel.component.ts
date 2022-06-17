import { Component, OnInit } from '@angular/core';
import {Activite} from "../classes/activites";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {Router} from "@angular/router";



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



  filtersLoaded2!: Promise<boolean>;

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.fb.afficheActiviteLittleCarousel(this);

  }




}
