import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  idPro : string = '';
  nomActivite : string = '';
  nomEntreprise : string = '';
  nomResponsable : string = '';
  numNomRue : string = '';
  ville : string = '';
  codePostale : string = '';
  pays : string = '';
  telephone : string = '';
  prix : number = 0;

  constructor(private data : DataService) { }

  ngOnInit(): void {
  }

}
