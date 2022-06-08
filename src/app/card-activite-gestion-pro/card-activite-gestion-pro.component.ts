import { Component, OnInit, Input} from '@angular/core';
import {Activite} from "../classes/activites";
import {ActivatedRoute, Router, Routes} from "@angular/router";


@Component({
  selector: 'app-card-activite-gestion-pro',
  templateUrl: './card-activite-gestion-pro.component.html',
  styleUrls: ['./card-activite-gestion-pro.component.css']
})
export class CardActiviteGestionProComponent implements OnInit {
  @Input() activite!: Activite;



  constructor(private router: Router) { }

  readMore() {
    this.router.navigate(['/', 'gestion-pro', 'activites', 'modifierActivite', this.activite.idActivite]);
  }

  ngOnInit(): void {
    /*this.nomActivite = "Activité 1";
    this.descriptionActivite = 'zdadazec';
    this.dateActivite = "2020-01-01";
    this.idActivite = "1";
    this.imagePath = "../../../assets/images/activite.jpg";*/
  }

}
