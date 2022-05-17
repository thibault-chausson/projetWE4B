import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSignup(email :string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }
  async onSignin(email :string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }

}
