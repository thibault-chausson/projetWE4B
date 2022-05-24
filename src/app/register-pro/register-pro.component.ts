import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-register-pro',
  templateUrl: './register-pro.component.html',
  styleUrls: ['./register-pro.component.css']
})
export class RegisterProComponent implements OnInit {

  idPro : string = '';
  emailPro : string = '';
  passwordPro : string = '';
  passwordCheckPro : string = '';
  nomEntreprise : string = '';
  numNomRue : string = '';
  ville : string = '';
  codePostale : string = '';
  pays : string = '';
  telephone : string = '';
  typeCompte : string = '';


  constructor(private auth : FirebaseService, private data : DataService) { }

  ngOnInit(): void {
  }

  registerPro() {

    if (this.emailPro == '') {
      alert('Please enter email');
      return;
    }

    if (this.passwordPro == '') {
      alert('Please enter password');
      return;
    }

    if(this.passwordPro != this.passwordCheckPro){
      alert('Il y a une erreur dans la vérification du mot de passe !');
      return;
    }

    if(this.nomEntreprise == ''){
      alert("Le nom de l'entreprise est obligatoire");
      return;
    }
    if(this.numNomRue == ''){
      alert("l'adresse de l'entreprise est obligatoire");
      return;
    }
    if(this.codePostale == ''){
      alert("le code postale de l'entreprise est obligatoire");
      return;
    }
    if(this.ville == ''){
      alert("la ville de l'entreprise est obligatoire");
      return;
    }
    if(this.pays == ''){
      alert("Le pays d'origine de l'entreprise est obligatoire");
      return;
    }
    if(this.telephone == ''){
      alert("le numéro de téléphone de l'entreprise est obligatoire");
      return;
    }

    this.typeCompte = "pro";
    this.auth.register(this.emailPro, this.passwordPro);
    this.data.addPro(this).then(() =>{
      alert('registration successful');
    }, err =>{
      alert(err.message);
    } )




    this.emailPro = '';
    this.passwordPro = '';
    this.passwordCheckPro ='';

  }


}
