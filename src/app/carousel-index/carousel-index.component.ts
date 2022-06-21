import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {ActivitesPres} from "../classes/activitesPres";

@Component({
  selector: 'app-carousel-index',
  templateUrl: './carousel-index.component.html',
  styleUrls: ['./carousel-index.component.css']
})
export class CarouselIndexComponent implements OnInit {


  @Input() ActiviteArray!: ActivitesPres[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {


  }

  readMore(id: string) {
    this.router.navigate(['/', 'afficher-activite', id]);
  }
}
