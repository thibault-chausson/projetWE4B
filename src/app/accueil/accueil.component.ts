import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getResolution() {
    alert("Votre résolution d'écran est: " + window.innerWidth + "x" + window.innerHeight);
  }

}
