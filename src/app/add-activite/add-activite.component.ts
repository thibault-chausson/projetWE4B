import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {


  nomActivite : string = '';
  nomEntreprise : string = '';
  nomResponsable : string = '';
  numNomRue : string = '';
  ville : string = '';
  codePostale : string = '';
  pays : string = '';
  telephone : string = '';
  prix : number = 0;
  description : string = '';

  constructor(private db : FirebaseService) { }

  ngOnInit(): void {
  }

  addActivite(){
    if(this.nomActivite == ''){
      alert('Veuillez entrer un nom d\'activité');
      return;
    }
    if(this.nomEntreprise == ''){
      alert('Veuillez entrer un nom d\'entreprise');
      return;
    }
    if(this.nomResponsable == ''){
      alert('Veuillez entrer un nom de responsable');
      return;
    }
    if(this.numNomRue == ''){
      alert('Veuillez entrer un numéro de rue');
      return;
    }
    if(this.ville == ''){
      alert('Veuillez entrer une ville');
      return;
    }
    if(this.codePostale == ''){
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
    if(this.description == ''){
      alert('Veuillez entrer une description');
      return;
    }

    this.db.addActivite(this.nomActivite, this.nomEntreprise, this.nomResponsable, this.numNomRue, this.ville, this.codePostale, this.pays, this.telephone, this.description, this.prix);

    this.nomActivite = '';
    this.nomEntreprise = '';
    this.nomResponsable = '';
    this.numNomRue = '';
    this.ville = '';
    this.codePostale = '';
    this.pays = '';
    this.telephone = '';
    this.prix = 0;
    this.description = '';

  }

}
