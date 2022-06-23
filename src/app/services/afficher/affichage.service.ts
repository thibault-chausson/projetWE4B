import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../firebase.service";
import {AfficherActiviteComponent} from "../../afficher-activite/afficher-activite.component";

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  constructor(private activatedroute : ActivatedRoute, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService) { }


  afficher(acti : AfficherActiviteComponent) {
    this.auth.currentUser.then(user => {
      this.db.collectionGroup('sous-acti').get().subscribe(querrySnapshot => {
        querrySnapshot.forEach((doc) => {
          if (doc.id == acti.numeroActi) {
            acti.infoActi.inputNomActi = doc.get('inputNomActi');
            acti.infoActi.inputAddress = doc.get('inputAddress');
            acti.infoActi.inputAddress2 = doc.get('inputAddress2');
            acti.infoActi.inputZip = doc.get('inputZip');
            acti.infoActi.inputCity = doc.get('inputCity');
            acti.infoActi.inputTel = doc.get('inputTel');
            acti.infoActi.inputDoma = doc.get('inputDoma');
            acti.infoActi.inputCate = doc.get('inputCate');
            acti.infoActi.jour = doc.get('jour');
            acti.infoActi.inputState = doc.get('inputState');
            acti.infoActi.inputNomRes = doc.get('inputNomRes');
            acti.infoActi.inputPrix = doc.get('inputPrix');
            acti.infoActi.inputDes = doc.get('inputDes');
            acti.infoActi.image1 = doc.get('image1');
            acti.infoActi.image2 = doc.get('image2');
            acti.infoActi.image3 = doc.get('image3');
            acti.infoActi.image4 = doc.get('image4');
            acti.infoActi.image5 = doc.get('image5');
          }
        });
        acti.filtersLoaded = Promise.resolve(true);
      });
    });
  }



}
