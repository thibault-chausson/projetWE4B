import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivitesGestionProComponent} from "../../activites-gestion-pro/activites-gestion-pro.component";
import {Activite} from "../../classes/activites";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GestionProService {

  constructor(private firebaseAuth : AngularFireAuth , private UserDb : AngularFirestore, private router : Router) { }

  supprimerActivite(idActivite : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(idActivite).delete();
    });
  }



  afficheProActivite(acti : ActivitesGestionProComponent){
    this.firebaseAuth.currentUser.then(user => {
      console.log(user?.uid);
      this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').get().subscribe(querrySnapshot => {
        querrySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          acti.nom = doc.get('inputNomActi');
          acti.description = doc.get('inputDes');
          acti.identifiant = doc.id;
          acti.date = doc.get('jour');
          acti.photo = doc.get('image1');

          acti.ActiviteArray.push(new Activite(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo));
        });
      });
    });
  }


  addActivite(inputNomActi : string, inputNomRes : string, inputAddress : string, inputAddress2 : string, inputCity : string, inputState : string, inputZip : string, inputTel : string, inputPrix : number, inputCate : string, inputDoma : string, inputDes : string, image1 : string, image2 : string, image3 : string, image4 : string, image5 : string, heure : string, jour : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc().set({
        inputNomActi: inputNomActi,
        inputNomRes: inputNomRes,
        inputAddress: inputAddress,
        inputAddress2: inputAddress2,
        inputCity: inputCity,
        inputState: inputState,
        inputZip: inputZip,
        inputTel: inputTel,
        inputPrix: inputPrix,
        inputCate: inputCate,
        inputDoma: inputDoma,
        inputDes: inputDes,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        heure : heure,
        jour : jour,
      }).then( () => {
        alert('activité ajoutée');
        this.router.navigate(['/gestion-pro/statistiques']);
      });
    });


  }

  modifActivite(inputNomActi : string, inputNomRes : string, inputAddress : string, inputAddress2 : string, inputCity : string, inputState : string, inputZip : string, inputTel : string, inputPrix : number, inputCate : string, inputDoma : string, inputDes : string, image1 : string, image2 : string, image3 : string, image4 : string, image5 : string, heure : string, jour : string, idAci : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(idAci).set({
        inputNomActi: inputNomActi,
        inputNomRes: inputNomRes,
        inputAddress: inputAddress,
        inputAddress2: inputAddress2,
        inputCity: inputCity,
        inputState: inputState,
        inputZip: inputZip,
        inputTel: inputTel,
        inputPrix: inputPrix,
        inputCate: inputCate,
        inputDoma: inputDoma,
        inputDes: inputDes,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        heure : heure,
        jour : jour,
      }).then( () => {
        alert('activité modifiée');
        this.router.navigateByUrl('/', {skipLocationChange : true}).then( () => this.router.navigate(['/gestion-pro/activites']));
      });
    });


  }


}

