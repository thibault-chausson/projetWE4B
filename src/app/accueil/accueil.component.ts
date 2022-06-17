import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {Router} from "@angular/router";

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

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService, private router: Router) {
  }

  ngOnInit(): void {
    this.fb.afficheActiviteBigCarousel(this);

  }


  getResolution() {
    alert("Votre résolution d'écran est: " + window.innerWidth + "x" + window.innerHeight);
  }
}
