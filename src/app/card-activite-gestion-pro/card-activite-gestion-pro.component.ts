import { Component, OnInit, Input} from '@angular/core';
import {Activite} from "../classes/activites";
import { Router } from "@angular/router";
import {GestionProService} from "../services/gestionPro/gestion-pro.service";


@Component({
  selector: 'app-card-activite-gestion-pro',
  templateUrl: './card-activite-gestion-pro.component.html',
  styleUrls: ['./card-activite-gestion-pro.component.css']
})
export class CardActiviteGestionProComponent implements OnInit {
  @Input() activite!: Activite;
  filtersLoaded!: Promise<boolean>;



  constructor(private router: Router, private gestion : GestionProService) { }

  readMore() {
    //this.router.navigate(['/', 'gestion-pro', 'activites', 'modifierActivite', this.activite.idActivite]);
    window.location.replace('/' + 'gestion-pro' + '/activites' + '/modifierActivite' + '/' + this.activite.idActivite);
  }

  delecteActivite() {
    this.gestion.supprimerActivite(this.activite.idActivite, this.filtersLoaded);
  }

  ngOnInit(): void {
  }

}
