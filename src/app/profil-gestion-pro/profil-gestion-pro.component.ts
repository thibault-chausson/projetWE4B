import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-profil-gestion-pro',
  templateUrl: './profil-gestion-pro.component.html',
  styleUrls: ['./profil-gestion-pro.component.css']
})
export class ProfilGestionProComponent implements OnInit {


  nomEntreprise: string = '';
  numNomRue: string = '';
  ville: string = '';
  codePostale: string = '';
  pays: string = '';
  telephone: string = '';


  nomEntrepriseTemp: string = '';
  numNomRueTemp: string = '';
  villeTemp: string = '';
  codePostaleTemp: string = '';
  paysTemp: string = '';
  telephoneTemp: string = '';


  constructor(private auth: FirebaseService, private fbAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.fbAuth.currentUser.then(user => {
      return this.db.collection('professional').doc(user?.uid).get().subscribe(doc => {

        this.nomEntrepriseTemp = doc.get('nomEntreprise');
        this.numNomRueTemp = doc.get('numNomRue');
        this.villeTemp = doc.get('ville');
        this.codePostaleTemp = doc.get('codePostale');
        this.paysTemp = doc.get('pays');
        this.telephoneTemp = doc.get('telephone');

      });
    });
  }


  ModifProfil() {


    if (this.nomEntreprise == '') {
      alert("Le nom de l'entreprise est obligatoire");
      return;
    }
    if (this.numNomRue == '') {
      alert("l'adresse de l'entreprise est obligatoire");
      return;
    }
    if (this.codePostale == '') {
      alert("le code postale de l'entreprise est obligatoire");
      return;
    }
    if (this.ville == '') {
      alert("la ville de l'entreprise est obligatoire");
      return;
    }
    if (this.pays == '') {
      alert("Le pays d'origine de l'entreprise est obligatoire");
      return;
    }
    if (this.telephone == '') {
      alert("le numéro de téléphone de l'entreprise est obligatoire");
      return;
    }


    this.auth.modifProfil(this.nomEntreprise, this.numNomRue, this.ville, this.codePostale, this.pays, this.telephone);


    this.nomEntreprise = '';
    this.numNomRue = '';
    this.ville = '';
    this.codePostale = '';
    this.pays = '';
    this.telephone = '';

  }

}
