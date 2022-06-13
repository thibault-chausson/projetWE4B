import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";


@Component({
  selector: 'app-domaine-logged',
  templateUrl: './domaine-logged.component.html',
  styleUrls: ['./domaine-logged.component.css']
})
export class DomaineLoggedComponent implements OnInit {

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  domaineActi : any;




  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService) { }

  ngOnInit(): void {
    this.domaineActi = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.domaineActi);
    this.fb.afficheDomaineActiviteLog(this, this.domaineActi);
    console.log(this.ActivitesPresArray);

  }

}
