import { Component } from '@angular/core';
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logg : FirebaseService) { }
  title = 'webLoisir';
  user = this.logg.logged
  console = console;



}
