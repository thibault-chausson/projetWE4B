import { Injectable } from '@angular/core';
import {DomainesComponent} from "../../domaines/domaines.component";
import {ActivitesPres} from "../../classes/activitesPres";
import {CategoriesComponent} from "../../categories/categories.component";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DomaineCategorieService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router, private UserDb : AngularFirestore) { }

  afficheDomaineActivite(acti : DomainesComponent, domaine : any){
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputDoma", "==", domaine)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        acti.photo = doc.get('image1');
        acti.prix = doc.get('inputPrix');


        acti.ActivitesPresArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));

      });
    });
  }

  afficheCategorieActivite(acti : CategoriesComponent, categorie : any){
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputCate", "==", categorie)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        acti.photo = doc.get('image1');
        acti.prix = doc.get('inputPrix');


        acti.ActivitesPresArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));

      });
    });
  }

}
