import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Activite} from "../classes/activites";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-activites-gestion-pro',
  templateUrl: './activites-gestion-pro.component.html',
  styleUrls: ['./activites-gestion-pro.component.css']
})
export class ActivitesGestionProComponent implements OnInit {
  nom: string = '';
  description: string = '';
  identifiant: string = '';
  date: string = '';
  photo: any;

  ActiviteArray : Activite[] = [];

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService) {
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.fb.modifierActivite(this);
  }





}
