import { Component, OnInit, Input } from '@angular/core';
import {Activite} from "../classes/activites";

@Component({
  selector: 'app-sous-carousel-card',
  templateUrl: './sous-carousel-card.component.html',
  styleUrls: ['./sous-carousel-card.component.css']
})
export class SousCarouselCardComponent implements OnInit {
  @Input() ActiviteArray!: Activite[];

  constructor() { }

  ngOnInit(): void {
  }

}
