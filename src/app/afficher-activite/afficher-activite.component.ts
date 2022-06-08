import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-afficher-activite',
  templateUrl: './afficher-activite.component.html',
  styleUrls: ['./afficher-activite.component.css']
})
export class AfficherActiviteComponent implements OnInit {

  numeroActi : any;


  nomActivite : string = '';
  adresse1: string = '';
  adresse2: string = '';
  codePostal: string = '';
  ville: string = '';
  telephone: string = '';
  domaine: string = '';
  categorie: string = '';
  jour: string = '';
  pays: string = '';
  nomResponsable: string = '';
  prix : number = 0;

  descriptionActivite: string = '';

  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;

  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.currentUser.then(user => {
      console.log(user?.uid);
      console.log(this.numeroActi = this.activatedroute.snapshot.paramMap.get('id'));
      this.db.collection('activites').doc(user?.uid).collection('sous-acti').doc(this.numeroActi).get().subscribe((doc) => {
        console.log(doc.get('inputNomActi'));
        this.nomActivite = doc.get('inputNomActi');
        this.adresse1 = doc.get('inputAddress');
        this.adresse2 = doc.get('inputAddress2');
        this.codePostal = doc.get('inputZip');
        this.ville = doc.get('inputCity');
        this.telephone = doc.get('inputTel');
        this.domaine = doc.get('inputDoma');
        this.categorie = doc.get('inputCate');
        this.jour = doc.get('jour');
        this.pays = doc.get('inputState');
        this.nomResponsable = doc.get('inputNomRes');
        this.prix = doc.get('inputPrix');
        this.nomActivite = doc.get('inputNomActi');
        this.descriptionActivite = doc.get('inputDes');
        this.image1 = doc.get('image1');
        this.image2 = doc.get('image2');
        this.image3 = doc.get('image3');
        this.image4 = doc.get('image4');
        this.image5 = doc.get('image5');


      });
    });

  }

}



