import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class GestionProService {

  constructor(private firebaseAuth : AngularFireAuth , private UserDb : AngularFirestore) { }

  supprimerActivite(idActivite : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(idActivite).delete();
    });
  }
}
