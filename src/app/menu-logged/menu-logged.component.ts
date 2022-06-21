import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent implements OnInit {

  isPro : boolean = false;
  isUser : boolean = false;
  role : string | null | undefined;





  constructor(public log : FirebaseService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('ROLE');
    if(this.role == 'pro'){
      this.isPro = true;
    }
    if (this.role == 'user'){
      this.isUser = true;
    }
  }

  logoutFunction() {
    this.log.logout()
    window.location.replace('/accueil');
  }




}
