import { Component, OnInit } from '@angular/core';
import {ActivitesPres} from "../classes/activitesPres";
import {RechercheService} from "../services/recherche/recherche.service";

@Component({
  selector: 'app-recherches',
  templateUrl: './recherches.component.html',
  styleUrls: ['./recherches.component.css']
})
export class RecherchesComponent implements OnInit {

  reche: boolean = false;

  lieu: string = '';
  trouve: boolean = false;

  nom : string = '';
  description : string = '';
  identifiant : string = '';
  photo : any;
  date : string = '';
  prix : number = 0;

  ActivitesPresArray : ActivitesPres[] = [];

  constructor(private recherche : RechercheService) { }

  ngOnInit(): void {

  }

  lancherRecherche(){
    console.log(this.lieu);
    this.reche= true;
    this.recherche.afficheRecherche(this);
  }

}
