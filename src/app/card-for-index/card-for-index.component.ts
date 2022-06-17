import { Component, OnInit, Input } from '@angular/core';
import {Activite} from "../classes/activites";


@Component({
  selector: 'app-card-for-index',
  templateUrl: './card-for-index.component.html',
  styleUrls: ['./card-for-index.component.css']
})
export class CardForIndexComponent implements OnInit {

  @Input() ActiviteArray!: Activite[];
  ActiviteArrayPres: Activite[][] = [[]];
  nbTrio: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ActiviteArray);
    //console.log(this.ActiviteArrayPres);
    this.nbTrio = ~~(this.ActiviteArray.length/3);
    for (let j= 0; j < this.nbTrio; j++) {
      for (let i = 0; i < 3; i++) {
        this.ActiviteArrayPres[j][i] = this.ActiviteArray[j*3+i];
      }
    }
    console.log(this.ActiviteArrayPres);
  }

}
