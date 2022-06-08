import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Activite} from "../classes/activites";

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

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth) {
  }

  ngOnInit(): void {
    this.auth.currentUser.then(user => {
      console.log(user?.uid);
      this.db.collection('activites').doc(user?.uid).collection('sous-acti').get().subscribe(querrySnapshot => {
        querrySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.nom = doc.get('inputNomActi');
          this.description = doc.get('inputDes');
          this.identifiant = doc.id;
          this.date = doc.get('jour');
          this.photo = doc.get('image1');

          this.ActiviteArray.push(new Activite(this.nom, this.description, this.date, this.identifiant, this.photo));
        });
      });
    });
  }
}
