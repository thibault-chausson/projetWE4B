import { Component, OnInit, Input } from '@angular/core';
import {Activite} from "../classes/activites";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sous-carousel-card',
  templateUrl: './sous-carousel-card.component.html',
  styleUrls: ['./sous-carousel-card.component.css']
})
export class SousCarouselCardComponent implements OnInit {
  @Input() ActiviteArray!: Activite[];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  readMore(num:number) {
    console.log(this.ActiviteArray[num].idActivite);
    this.router.navigate(['/', 'afficher-activite', this.ActiviteArray[num].idActivite]);
  }

}
