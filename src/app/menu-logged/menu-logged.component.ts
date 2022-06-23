import {Component, HostListener, OnInit} from '@angular/core';
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

  des1 : boolean = false;
  des2 : boolean = false;
  des3 : boolean = false;


  ordi !: boolean;
  innerWidth !: number;


  constructor(public log : FirebaseService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('ROLE');
    if(this.role == 'pro'){
      this.isPro = true;
    }
    if (this.role == 'user'){
      this.isUser = true;
    }

    if (window.innerWidth < 1127) { //768px portrait
      this.ordi = false;
    }
    else {
      this.ordi = true;
    }


  }

  @HostListener('window:resize', ['$event'])
    onResize(event : any) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1127) { //768px portrait
      this.ordi = false;
    }
    else {
      this.ordi = true;
    }
  }


  logoutFunction() {
    this.log.logout()
    window.location.replace('/accueil');
  }

  des(num : number) {
    if (num == 1) {
      this.des1 = !this.des1;
      this.des2 = false;
      this.des3 = false;
    }
    else if (num == 2) {
      this.des2 = !this.des2;
      this.des1 = false;
      this.des3 = false;
    }
    else if (num == 3) {
      this.des3 = !this.des3;
      this.des1 = false;
      this.des2 = false;
    }
  }




}
