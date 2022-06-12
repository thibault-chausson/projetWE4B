import {Component, Input, OnInit} from '@angular/core';
import {Activite} from "../classes/activites";
import {ActivitesPres} from "../classes/activitesPres";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-domaine',
  templateUrl: './card-domaine.component.html',
  styleUrls: ['./card-domaine.component.css']
})
export class CardDomaineComponent implements OnInit {
  @Input() activitesPres!: ActivitesPres;

  constructor(private router: Router) { }

  readMore() {
    this.router.navigate(['/', 'domaines', this.activitesPres.idActivite]);
  }

  ngOnInit(): void {
  }

}
