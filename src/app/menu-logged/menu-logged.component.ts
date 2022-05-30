import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent implements OnInit {

  constructor(private log : FirebaseService) { }

  ngOnInit(): void {
  }

  logoutFunction() {
    this.log.logout()
  }




}
