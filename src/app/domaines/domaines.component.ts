import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {ActivatedRoute} from "@angular/router";
import {DomaineCategorieService} from "../services/domaineCategorie/domaine-categorie.service";

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css']
})
export class DomainesComponent implements OnInit {

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  domaineActi : any;




  constructor(private activatedroute : ActivatedRoute, private domaineCat : DomaineCategorieService) { }

  ngOnInit(): void {
    this.domaineActi = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.domaineActi);
    this.domaineCat.afficheDomaineActivite(this, this.domaineActi);
    console.log(this.ActivitesPresArray);

  }

}
