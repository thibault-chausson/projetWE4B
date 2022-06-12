import { Component, OnInit } from '@angular/core';
import {Activite} from "../classes/activites";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {ActivitesPres} from "../classes/activitesPres";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css']
})
export class DomainesComponent implements OnInit {

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  numeroActi : any;




  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService) { }

  ngOnInit(): void {
    this.numeroActi = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.numeroActi);
    this.fb.afficheDomaineActivite(this, this.numeroActi);

  }

}
