import { Component, OnInit } from '@angular/core';
import {Activite} from "../classes/activites";
import {GestionProService} from "../services/gestionPro/gestion-pro.service";

@Component({
  selector: 'app-activites-gestion-pro',
  templateUrl: './activites-gestion-pro.component.html',
  styleUrls: ['./activites-gestion-pro.component.css']
})
export class ActivitesGestionProComponent implements OnInit {
  nom: string = '';
  description: string = '';
  identifiant: string = '';
  date: string = '';
  photo: any;

  ActiviteArray : Activite[] = [];

  constructor(private gestion : GestionProService) {
  }

  ngOnInit(): void {
    this.gestion.afficheProActivite(this);
  }
}
