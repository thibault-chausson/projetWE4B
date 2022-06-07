import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";



@Component({
  selector: 'app-add-activite-gestion-pro',
  templateUrl: './add-activite-gestion-pro.component.html',
  styleUrls: ['./add-activite-gestion-pro.component.css']
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
  image : string = '' ;


  constructor(private db : FirebaseService) { }

  ngOnInit(): void {
  }


  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.image = imgBase64Path;
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


    this.db.addActivite(this.inputNomActi, this.inputNomRes, this.inputAddress, this.inputAddress2, this.inputCity, this.inputState, this.inputZip, this.inputTel, this.inputPrix, this.inputCate, this.inputDoma, this.inputDes, this.image);

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
    this.image = '';

  }



}
