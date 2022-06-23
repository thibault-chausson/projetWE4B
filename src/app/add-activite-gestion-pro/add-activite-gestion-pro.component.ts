import { Component, OnInit } from '@angular/core';
import {GestionProService} from "../services/gestionPro/gestion-pro.service";
import {GestionProActi} from "../classes/gestionProActi";


@Component({
  selector: 'app-add-activite-gestion-pro',
  templateUrl: './add-activite-gestion-pro.component.html',
  styleUrls: ['./add-activite-gestion-pro.component.css'],
})
export class AddActiviteGestionProComponent implements OnInit {

  ajoutActi: GestionProActi = new GestionProActi( "",  "",  "", "", "", "",  "",  "",  "",  "",  "",  "",  "", 0, "", "", "",  "",  "");




  constructor(private gestion : GestionProService) { }

  ngOnInit(): void {
  }

  onClick(event : any, number : number) {
    this.gestion.onFileSelected(event, number, this.ajoutActi);
  }






  addActivite() {

    console.log(this.ajoutActi);

    if(this.ajoutActi.inputNomActi == ''){
      alert('Veuillez entrer un nom d\'activité');
      return;
    }
    if(this.ajoutActi.inputNomRes == ''){
      alert('Veuillez entrer un nom de responsable');
      return;
    }
    if(this.ajoutActi.inputAddress == ''){
      alert('Veuillez entrer un numéro de rue');
      return;
    }
    if(this.ajoutActi.inputCity == ''){
      alert('Veuillez entrer une ville');
      return;
    }
    if(this.ajoutActi.inputZip == ''){
      alert('Veuillez entrer un code postal');
      return;
    }
    if(this.ajoutActi.inputState == ''){
      alert('Veuillez entrer un pays');
      return;
    }
    if(this.ajoutActi.inputTel == ''){
      alert('Veuillez entrer un numéro de téléphone');
      return;
    }
    if(this.ajoutActi.inputPrix == 0){
      alert('Veuillez entrer un prix');
      return;
    }
    if(this.ajoutActi.inputDes == ''){
      alert('Veuillez entrer une description');
      return;
    }
    if(this.ajoutActi.inputCate == ''){
      alert('Veuillez entrer une catégorie');
      return;
    }
    if(this.ajoutActi.inputDoma == ''){
      alert('Veuillez entrer un domaine');
      return;
    }
    if(this.ajoutActi.inputDoma == ''){
      alert('Veuillez entrer un domaine');
      return;
    }

    let compte = 0;
    if (this.ajoutActi.image1 != '') {
      compte=compte+1;
    }
    if (this.ajoutActi.image2 != '') {
      compte=compte+1;
    }
    if (this.ajoutActi.image3 != '') {
      compte=compte+1;
    }
    if (this.ajoutActi.image4 != '') {
      compte=compte+1;
    }
    if (this.ajoutActi.image5 != '') {
      compte=compte+1;
    }
    if(compte <2){
      alert('Mettez deux images');
      return;
    }

    this.ajoutActi.heure = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    this.ajoutActi.jour = new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear();


    this.gestion.addActivite(this.ajoutActi);



  }



}
