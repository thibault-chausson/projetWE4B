import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {GestionProActi} from "../classes/gestionProActi";
import {AffichageService} from "../services/afficher/affichage.service";

@Component({
  selector: 'app-afficher-activite',
  templateUrl: './afficher-activite.component.html',
  styleUrls: ['./afficher-activite.component.css']
})
export class AfficherActiviteComponent implements OnInit {

  filtersLoaded!: Promise<boolean>;

  infoActi : GestionProActi = new GestionProActi( "",  "",  "", "", "", "",  "",  "",  "",  "",  "",  "",  "", 0, "", "", "",  "",  "");


  numeroActi : any;


  constructor(private activatedroute : ActivatedRoute, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService, private afficher : AffichageService) { }
  ngOnInit(): void {
    this.numeroActi = this.activatedroute.snapshot.paramMap.get('id');
    this.afficher.afficher(this.filtersLoaded, this.infoActi, this.numeroActi);
  }

  /*onActivite(note : number) {
    this.numeroActi = this.activatedroute.snapshot.paramMap.get('id')
    this.fb.noter(note, this.numeroActi);
  }*/
}
