import { Component, OnInit } from '@angular/core';
import {GestionProService} from "../services/gestionPro/gestion-pro.service";
import {GestionProActi} from "../classes/gestionProActi";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-activite-gestion-pro',
  templateUrl: './add-activite-gestion-pro.component.html',
  styleUrls: ['./add-activite-gestion-pro.component.css'],
})
export class AddActiviteGestionProComponent implements OnInit {

  ajoutActi: GestionProActi = new GestionProActi( "",  "",  "", "", "", "",  "",  "",  "",  "",  "",  "",  "", 0, "", "", "",  "",  "");


  ajoutActivite = new FormGroup({
    nomActi : new FormControl('', [Validators.required]),
    nomRes : new FormControl('', [Validators.required]),
    addresseOne : new FormControl('', [Validators.required]),
    addresseTwo : new FormControl('', [Validators.required]),
    ville : new FormControl('', [Validators.required]),
    pays : new FormControl('', [Validators.required]),
    codePos : new FormControl('', [Validators.required]),
    telephone : new FormControl('', [Validators.required]),
    prix : new FormControl(0, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    categorie : new FormControl('', [Validators.required]),
    domaine : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
  });

  get nom(): AbstractControl | null {
    this.ajoutActi.inputNomActi = this.ajoutActivite.get('nomActi')?.value;
    return this.ajoutActivite.get('nomActi');
  }

  get nomRespon(): AbstractControl | null {
    this.ajoutActi.inputNomRes = this.ajoutActivite.get('nomRes')?.value;
    return this.ajoutActivite.get('nomRes');
  }

  get addr1(): AbstractControl | null {
    this.ajoutActi.inputAddress = this.ajoutActivite.get('addresseOne')?.value;
    return this.ajoutActivite.get('addresseOne');
  }

  get addr2(): AbstractControl | null {
    this.ajoutActi.inputAddress2 = this.ajoutActivite.get('addresseTwo')?.value;
    return this.ajoutActivite.get('addresseTwo');
  }

  get city(): AbstractControl | null {
    this.ajoutActi.inputCity = this.ajoutActivite.get('ville')?.value;
    return this.ajoutActivite.get('ville');
  }

  get state(): AbstractControl | null {
    this.ajoutActi.inputState = this.ajoutActivite.get('pays')?.value;
    return this.ajoutActivite.get('pays');
  }

  get zipCode(): AbstractControl | null {
    this.ajoutActi.inputZip = this.ajoutActivite.get('codePos')?.value;
    return this.ajoutActivite.get('codePos');
  }

  get tel(): AbstractControl | null {
    this.ajoutActi.inputTel = this.ajoutActivite.get('telephone')?.value;
    return this.ajoutActivite.get('telephone');
  }

  get price() : AbstractControl | null {
    this.ajoutActi.inputPrix = this.ajoutActivite.get('prix')?.value;
    return this.ajoutActivite.get('prix');
  }

  get category() : AbstractControl | null {
    this.ajoutActi.inputCate = this.ajoutActivite.get('categorie')?.value;
    return this.ajoutActivite.get('categorie');
  }

  get doma() : AbstractControl | null {
    this.ajoutActi.inputDoma = this.ajoutActivite.get('domaine')?.value;
    return this.ajoutActivite.get('domaine');
  }

  get desc() : AbstractControl | null {
    this.ajoutActi.inputDes = this.ajoutActivite.get('description')?.value;
    return this.ajoutActivite.get('description');
  }



  constructor(private gestion : GestionProService) { }

  ngOnInit(): void {
  }

  doSth() {

  }

  onClick(event : any, number : number) {
    this.gestion.onFileSelected(event, number, this.ajoutActi);
  }






  addActivite() {


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
