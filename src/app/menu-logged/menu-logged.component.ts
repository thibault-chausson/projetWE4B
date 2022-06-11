import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent implements OnInit {

  isPro : boolean = false;
  role : string | null | undefined;

  constructor(public log : FirebaseService, private auth : AngularFireAuth, private db : AngularFirestore) { }

  ngOnInit(): void {
   this.role = localStorage.getItem('ROLE');
   if(this.role == 'pro'){
     this.isPro = true;
   }
  }

  logoutFunction() {
    this.log.logout()
  }






}
