import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";


@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})

export class Error404Component implements OnInit {

  isLogged : boolean = false;
  constructor(public fs : FirebaseService) { }


  ngOnInit(): void {
    this.isLogged = this.fs.isLoggedIn();
    console.log(this.isLogged);

  }

}
