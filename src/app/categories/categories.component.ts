import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {DomaineCategorieService} from "../services/domaineCategorie/domaine-categorie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  categorieActi : any;




  constructor(private activatedroute : ActivatedRoute, private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private domaineCate : DomaineCategorieService) { }

  ngOnInit(): void {
    this.categorieActi = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.categorieActi);
    this.domaineCate.afficheCategorieActivite(this, this.categorieActi);
    console.log(this.ActivitesPresArray);

  }

}
