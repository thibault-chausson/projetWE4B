import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GestionProService} from "../services/gestionPro/gestion-pro.service";
import {GestionProActi} from "../classes/gestionProActi";
import {AffichageService} from "../services/afficher/affichage.service";

@Component({
  selector: 'app-modifier-activite-gestion-pro',
  templateUrl: './modifier-activite-gestion-pro.component.html',
  styleUrls: ['./modifier-activite-gestion-pro.component.css']
})
export class ModifierActiviteGestionProComponent implements OnInit {

  filtersLoaded!: Promise<boolean>;

  infoActi : GestionProActi = new GestionProActi( "",  "",  "", "", "", "",  "",  "",  "",  "",  "",  "",  "", 0, "", "", "",  "",  "");


  numeroActi : any;


  constructor(private activatedroute : ActivatedRoute, private auth : AngularFireAuth, private gestion : GestionProService, private afficher : AffichageService) {  }

  ngOnInit(): void {
    this.numeroActi = this.activatedroute.snapshot.paramMap.get('id');
    this.afficher.afficher(this.filtersLoaded, this.infoActi, this.numeroActi);
  }


  onClick(event : any, number : number) {
    this.gestion.onFileSelected(event, number, this.infoActi);
  }


  modifActivite() {


    if(this.infoActi.inputNomActi == ''){
      alert('Veuillez entrer un nom d\'activité');
      return;
    }
    if(this.infoActi.inputNomRes == ''){
      alert('Veuillez entrer un nom de responsable');
      return;
    }
    if(this.infoActi.inputAddress == ''){
      alert('Veuillez entrer un numéro de rue');
      return;
    }
    if(this.infoActi.inputCity == ''){
      alert('Veuillez entrer une ville');
      return;
    }
    if(this.infoActi.inputZip == ''){
      alert('Veuillez entrer un code postal');
      return;
    }
    if(this.infoActi.inputState == ''){
      alert('Veuillez entrer un pays');
      return;
    }
    if(this.infoActi.inputTel == ''){
      alert('Veuillez entrer un numéro de téléphone');
      return;
    }
    if(this.infoActi.inputPrix == 0){
      alert('Veuillez entrer un prix');
      return;
    }
    if(this.infoActi.inputDes == ''){
      alert('Veuillez entrer une description');
      return;
    }
    if(this.infoActi.inputCate == ''){
      alert('Veuillez entrer une catégorie');
      return;
    }
    if(this.infoActi.inputDoma == ''){
      alert('Veuillez entrer un domaine');
      return;
    }
    if(this.infoActi.inputDoma == ''){
      alert('Veuillez entrer un domaine');
      return;
    }

    let compte = 0;
    if (this.infoActi.image1 != '') {
      compte=compte+1;
    }
    if (this.infoActi.image2 != '') {
      compte=compte+1;
    }
    if (this.infoActi.image3 != '') {
      compte=compte+1;
    }
    if (this.infoActi.image4 != '') {
      compte=compte+1;
    }
    if (this.infoActi.image5 != '') {
      compte=compte+1;
    }
    if(compte <2){
      alert('Mettez deux images');
      return;
    }

    this.infoActi.heure = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    this.infoActi.jour = new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear();


    this.gestion.modifActivite(this.infoActi, this.numeroActi);

  }
}



