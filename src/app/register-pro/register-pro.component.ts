import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-pro',
  templateUrl: './register-pro.component.html',
  styleUrls: ['./register-pro.component.css']
})
export class RegisterProComponent implements OnInit {


  emailPro: string = '';
  passwordPro: string = '';
  passwordCheckPro: string = '';
  nomEntreprise: string = '';
  numNomRue: string = '';
  ville: string = '';
  codePostale: string = '';
  pays: string = '';
  telephone: string = '';


  inscriptionPro = new FormGroup({
    emailPro: new FormControl('', [Validators.required, Validators.email]),
    passwordPro: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordCheckPro: new FormControl('', [Validators.required, Validators.minLength(6)]),
    nomEntreprise: new FormControl('', [Validators.required]),
    numNomRue: new FormControl('', [Validators.required]),
    ville: new FormControl('', [Validators.required]),
    codePostale: new FormControl('', [Validators.required]),
    pays: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  get email(): AbstractControl | null {
    this.emailPro = this.inscriptionPro.get('emailPro')?.value;
    return this.inscriptionPro.get('emailPro');
  }

  get password(): AbstractControl | null {
    this.passwordPro = this.inscriptionPro.get('passwordPro')?.value;
    return this.inscriptionPro.get('passwordPro');
  }

  get passwordCheck(): AbstractControl | null {
    this.passwordCheckPro = this.inscriptionPro.get('passwordCheckPro')?.value;
    return this.inscriptionPro.get('passwordCheckPro');
  }

  get nomEntre(): AbstractControl | null {
    this.nomEntreprise = this.inscriptionPro.get('nomEntreprise')?.value;
    return this.inscriptionPro.get('nomEntreprise');
  }

  get numEtNomRue(): AbstractControl | null {
    this.numNomRue = this.inscriptionPro.get('numNomRue')?.value;
    return this.inscriptionPro.get('numNomRue');
  }

  get villeEntre(): AbstractControl | null {
    this.ville = this.inscriptionPro.get('ville')?.value;
    return this.inscriptionPro.get('ville');
  }

  get codePost(): AbstractControl | null {
    this.codePostale = this.inscriptionPro.get('codePostale')?.value;
    return this.inscriptionPro.get('codePostale');
  }

  get paysEntre(): AbstractControl | null {
    this.pays = this.inscriptionPro.get('pays')?.value;
    return this.inscriptionPro.get('pays');
  }

  get telEntre(): AbstractControl | null {
    this.telephone = this.inscriptionPro.get('telephone')?.value;
    return this.inscriptionPro.get('telephone');
  }


  constructor(private auth: FirebaseService) {
  }

  ngOnInit(): void {
  }

  doSth() {
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

    if (this.passwordPro != this.passwordCheckPro) {
      alert('Il y a une erreur dans la vérification du mot de passe !');
      return;
    }

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


    this.auth.registerPro(this.emailPro, this.passwordPro, this.nomEntreprise, this.numNomRue, this.ville, this.pays, this.codePostale, this.telephone);


    this.emailPro = '';
    this.passwordPro = '';
    this.passwordCheckPro = '';
    this.nomEntreprise = '';
    this.numNomRue = '';
    this.ville = '';
    this.codePostale = '';
    this.pays = '';
    this.telephone = '';

  }


}
