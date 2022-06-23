import { Injectable } from '@angular/core';
import {RecherchesComponent} from "../../recherches/recherches.component";
import {ActivitesPres} from "../../classes/activitesPres";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  constructor(private firebaseAuth : AngularFireAuth,  private UserDb : AngularFirestore) { }

  afficheRecherche(acti : RecherchesComponent){
    acti.ActivitesPresArray = [];
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputCity", "==", acti.lieu[0].toUpperCase() + acti.lieu.slice(1),)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
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
