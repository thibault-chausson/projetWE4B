import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RegisterProComponent} from "../register-pro/register-pro.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db : AngularFirestore) { }

  //add professional
  addPro(pro : RegisterProComponent){

    this.db.collection("professional").add({
      emailPro: pro.emailPro,
      nomEntreprise: pro.nomEntreprise,
      numNomRue: pro.numNomRue,
      ville: pro.ville,
      codePostale: pro.codePostale,
      pays: pro.pays,
      telephone: pro.telephone,
      typeCompte: pro.typeCompte

    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });


  }
  //add activite


}
