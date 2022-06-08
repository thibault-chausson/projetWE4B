import { Component, OnInit, Input } from '@angular/core';
import {Activite} from "../classes/activites";

@Component({
  selector: 'app-card-activite-gestion-pro',
  templateUrl: './card-activite-gestion-pro.component.html',
  styleUrls: ['./card-activite-gestion-pro.component.css']
})
export class CardActiviteGestionProComponent implements OnInit {
  @Input() activite!: Activite;


  constructor() { }

  ngOnInit(): void {
    /*this.nomActivite = "Activité 1";
    this.descriptionActivite = 'zdadazec';
    this.dateActivite = "2020-01-01";
    this.idActivite = "1";
    this.imagePath = "../../../assets/images/activite.jpg";*/
  }

}
