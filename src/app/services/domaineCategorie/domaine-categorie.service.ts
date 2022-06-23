import { Injectable } from '@angular/core';
import {ActivitesPres} from "../../classes/activitesPres";
import {CategoriesComponent} from "../../categories/categories.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DomaineCategorieService {

  constructor(private UserDb : AngularFirestore) { }

  afficheDomaineCategorieActivite(nom : string, description : string, identifiant : string, photo : any, date : string, prix : number, ActivitesPresArray : ActivitesPres[], domaineActi : string, cateDoma : string){
    this.UserDb.collectionGroup('sous-acti', ref => ref.where(cateDoma, "==", domaineActi)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
        nom = doc.get('inputNomActi');
        description = doc.get('inputDes');
        identifiant = doc.id;
        date = doc.get('jour');
        photo = doc.get('image1');
        prix = doc.get('inputPrix');


        ActivitesPresArray.push(new ActivitesPres(nom, description, date, identifiant, photo, prix));

      });
    });
  }


}
