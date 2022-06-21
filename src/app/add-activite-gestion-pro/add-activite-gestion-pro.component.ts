import { Component, OnInit } from '@angular/core';
import {GestionProService} from "../services/gestionPro/gestion-pro.service";


@Component({
  selector: 'app-add-activite-gestion-pro',
  templateUrl: './add-activite-gestion-pro.component.html',
  styleUrls: ['./add-activite-gestion-pro.component.css'],
})
export class AddActiviteGestionProComponent implements OnInit {

  inputNomActi : string = '';
  inputNomRes : string = '';
  inputAddress : string = '';
  inputAddress2 : string = '';
  inputCity : string = '';
  inputState : string = '';
  inputZip : string = '';
  inputTel : string = '';
  inputPrix : number = 0;
  inputCate : string = '';
  inputDoma : string = '';
  inputDes : string = '';
  image1 : string = '' ;
  image2 : string = '' ;
  image3 : string = '' ;
  image4 : string = '' ;
  image5 : string = '' ;
  heure : string = '';
  jour : string = '';


  constructor(private gestion : GestionProService) { }

  ngOnInit(): void {
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




  addActivite() {


    if(this.inputNomActi == ''){
      alert('Veuillez entrer un nom d\'activité');
      return;
    }
    if(this.inputNomRes == ''){
      alert('Veuillez entrer un nom de responsable');
      return;
    }
    if(this.inputAddress == ''){
      alert('Veuillez entrer un numéro de rue');
      return;
    }
    if(this.inputCity == ''){
      alert('Veuillez entrer une ville');
      return;
    }
    if(this.inputZip == ''){
      alert('Veuillez entrer un code postal');
      return;
    }
    if(this.inputState == ''){
      alert('Veuillez entrer un pays');
      return;
    }
    if(this.inputTel == ''){
      alert('Veuillez entrer un numéro de téléphone');
      return;
    }
    if(this.inputPrix == 0){
      alert('Veuillez entrer un prix');
      return;
    }
    if(this.inputDes == ''){
      alert('Veuillez entrer une description');
      return;
    }
    if(this.inputCate == ''){
      alert('Veuillez entrer une catégorie');
      return;
    }
    if(this.inputDoma == ''){
      alert('Veuillez entrer un domaine');
      return;
    }
    if(this.inputDoma == ''){
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


    this.gestion.addActivite(this.inputNomActi, this.inputNomRes, this.inputAddress, this.inputAddress2, this.inputCity, this.inputState, this.inputZip, this.inputTel, this.inputPrix, this.inputCate, this.inputDoma, this.inputDes, this.image1, this.image2, this.image3, this.image4, this.image5, this.heure, this.jour);

    this.inputNomActi = '';
    this.inputNomRes = '';
    this.inputAddress = '';
    this.inputAddress2 = '';
    this.inputCity = '';
    this.inputState = '';
    this.inputZip = '';
    this.inputTel = '';
    this.inputPrix = 0;
    this.inputCate = '';
    this.inputDoma = '';
    this.inputDes = '';
    this.image1 = '';
    this.image2 = '';
    this.image3 = '';
    this.image4 = '';
    this.image5 = '';
    this.heure = '';
    this.jour = '';

  }



}
