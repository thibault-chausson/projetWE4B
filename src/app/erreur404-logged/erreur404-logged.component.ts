import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-erreur404-logged',
  templateUrl: './erreur404-logged.component.html',
  styleUrls: ['./erreur404-logged.component.css']
})
export class Erreur404LoggedComponent implements OnInit {


  constructor(public fs : FirebaseService) { }

  ngOnInit(): void {
    console.log(this.fs.userIsPro);
  }

}
