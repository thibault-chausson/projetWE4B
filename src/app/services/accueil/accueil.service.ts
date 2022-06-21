import { Injectable } from '@angular/core';
import {AccueilComponent} from "../../accueil/accueil.component";
import {ActivitesPres} from "../../classes/activitesPres";
import {CardCarouselComponent} from "../../card-carousel/card-carousel.component";
import {Activite} from "../../classes/activites";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router, private UserDb : AngularFirestore) { }

  afficheActiviteBigCarousel(acti : AccueilComponent){
    acti.ActiviteArray = [];
    this.UserDb.collectionGroup('sous-acti', ref => ref.limit(3)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        if (doc.get('image1') != null){
          acti.photo = doc.get('image1');
        }
        else if (doc.get('image2') != null){
          acti.photo = doc.get('image2');
        }
        else if (doc.get('image3') != null){
          acti.photo = doc.get('image3');
        }
        else if (doc.get('image4') != null){
          acti.photo = doc.get('image4');
        }
        else if (doc.get('image5') != null){
          acti.photo = doc.get('image5');
        }
        acti.prix = doc.get('inputPrix');


        acti.ActiviteArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));

      });
      acti.filtersLoaded = Promise.resolve(true);
    });

  }


  afficheActiviteLittleCarousel(acti : CardCarouselComponent){
    this.UserDb.collectionGroup('sous-acti', ref => ref.orderBy(acti.carouse.tri)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        if (doc.get('image1') != null){
          acti.photo = doc.get('image1');
        }
        else if (doc.get('image2') != null){
          acti.photo = doc.get('image2');
        }
        else if (doc.get('image3') != null){
          acti.photo = doc.get('image3');
        }
        else if (doc.get('image4') != null){
          acti.photo = doc.get('image4');
        }
        else if (doc.get('image5') != null){
          acti.photo = doc.get('image5');
        }



        acti.activiteArray.push(new Activite(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo));
      });

      acti.filtersLoaded2 = Promise.resolve(true);
    });
  }


}
