import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {GestionProService} from "../services/gestionPro/gestion-pro.service";

@Component({
  selector: 'app-modifier-activite-gestion-pro',
  templateUrl: './modifier-activite-gestion-pro.component.html',
  styleUrls: ['./modifier-activite-gestion-pro.component.css']
})
export class ModifierActiviteGestionProComponent implements OnInit {

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
  image1: string = '';
  image2: string = '';
  image3: string = '';
  image4: string = '';
  image5: string= '';
  heure: string = '';








  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db2 : AngularFirestore, private auth : AngularFireAuth, private gestion : GestionProService) {  }

  ngOnInit(): void {
    this.auth.currentUser.then(user => {
      console.log(user?.uid);
      console.log(this.numeroActi = this.activatedroute.snapshot.paramMap.get('id'));
      this.db2.collection('activites').doc(user?.uid).collection('sous-acti').doc(this.numeroActi).get().subscribe((doc) => {
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



onFileSelected1(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.image1 = imgBase64Path;
        console.log(imgBase64Path);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}

onFileSelected2(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.image2 = imgBase64Path;
        console.log(imgBase64Path);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}

onFileSelected3(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.image3 = imgBase64Path;
        console.log(imgBase64Path);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}

onFileSelected4(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.image4 = imgBase64Path;
        console.log(imgBase64Path);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}

onFileSelected5(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.image5 = imgBase64Path;
        console.log(imgBase64Path);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}




modifActivite() {


  if(this.nomActivite == ''){
    alert('Veuillez entrer un nom d\'activité');
    return;
  }
  if(this.nomResponsable == ''){
    alert('Veuillez entrer un nom de responsable');
    return;
  }
  if(this.adresse1 == ''){
    alert('Veuillez entrer un numéro de rue');
    return;
  }
  if(this.ville == ''){
    alert('Veuillez entrer une ville');
    return;
  }
  if(this.codePostal == ''){
    alert('Veuillez entrer un code postal');
    return;
  }
  if(this.pays == ''){
    alert('Veuillez entrer un pays');
    return;
  }
  if(this.telephone == ''){
    alert('Veuillez entrer un numéro de téléphone');
    return;
  }
  if(this.prix == 0){
    alert('Veuillez entrer un prix');
    return;
  }
  if(this.descriptionActivite == ''){
    alert('Veuillez entrer une description');
    return;
  }
  if(this.categorie == ''){
    alert('Veuillez entrer une catégorie');
    return;
  }
  if(this.domaine == ''){
    alert('Veuillez entrer un domaine');
    return;
  }


  let compte = 0;
  if (this.image1 != '') {
    compte=compte+1;
  }
  if (this.image2 != '') {
    compte=compte+1;
  }
  if (this.image3 != '') {
    compte=compte+1;
  }
  if (this.image4 != '') {
    compte=compte+1;
  }
  if (this.image5 != '') {
    compte=compte+1;
  }
  if(compte <2){
    alert('Mettez deux images');
    return;
  }

  this.heure = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
  this.jour = new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear();


  this.gestion.modifActivite(this.nomActivite, this.nomResponsable, this.adresse1, this.adresse2, this.ville, this.pays, this.codePostal, this.telephone, this.prix, this.categorie, this.domaine, this.descriptionActivite, this.image1, this.image2, this.image3, this.image4, this.image5, this.heure, this.jour, this.numeroActi);

  this.nomActivite = '';
  this.nomResponsable = '';
  this.adresse1 = '';
  this.adresse2 = '';
  this.ville = '';
  this.pays = '';
  this.codePostal = '';
  this.telephone = '';
  this.prix = 0;
  this.categorie = '';
  this.domaine = '';
  this.descriptionActivite = '';
  this.image1 = '';
  this.image2 = '';
  this.image3 = '';
  this.image4 = '';
  this.image5 = '';
  this.heure = '';
  this.jour = '';
  this.numeroActi = '';

}
}



