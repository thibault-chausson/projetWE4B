import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GestionProActi} from "../../classes/gestionProActi";

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  constructor(private activatedroute: ActivatedRoute, private db: AngularFirestore, private auth: AngularFireAuth) {
  }


  afficher(filtersLoaded: Promise<boolean>, infoActi: GestionProActi, numeroActi: string) {
    this.auth.currentUser.then(user => {
      this.db.collectionGroup('sous-acti').get().subscribe(querrySnapshot => {
        querrySnapshot.forEach((doc) => {
          if (doc.id == numeroActi) {
            infoActi.inputNomActi = doc.get('inputNomActi');
            infoActi.inputAddress = doc.get('inputAddress');
            infoActi.inputAddress2 = doc.get('inputAddress2');
            infoActi.inputZip = doc.get('inputZip');
            infoActi.inputCity = doc.get('inputCity');
            infoActi.inputTel = doc.get('inputTel');
            infoActi.inputDoma = doc.get('inputDoma');
            infoActi.inputCate = doc.get('inputCate');
            infoActi.jour = doc.get('jour');
            infoActi.inputState = doc.get('inputState');
            infoActi.inputNomRes = doc.get('inputNomRes');
            infoActi.inputPrix = doc.get('inputPrix');
            infoActi.inputDes = doc.get('inputDes');
            infoActi.image1 = doc.get('image1');
            infoActi.image2 = doc.get('image2');
            infoActi.image3 = doc.get('image3');
            infoActi.image4 = doc.get('image4');
            infoActi.image5 = doc.get('image5');
          }
        });
        filtersLoaded = Promise.resolve(true);
      });
    });
  }


}
