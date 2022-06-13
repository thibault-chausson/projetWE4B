import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {ActivitesPres} from "../classes/activitesPres";

@Component({
  selector: 'app-recherches',
  templateUrl: './recherches.component.html',
  styleUrls: ['./recherches.component.css']
})
export class RecherchesComponent implements OnInit {

  reche: boolean = false;

  lieu: string = '';
  trouve: boolean = false;

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService) { }

  ngOnInit(): void {

  }

  lancherRecherche(){
    console.log(this.lieu);
    this.fb.afficheRecherche(this);
  }

}
