import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

import {RegisterProComponent} from "../register-pro/register-pro.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router, private UserDb : AngularFirestore) { }

  console = console;




  //login method
  login(email : string, password : string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then( () => {
      alert('login successful');
      this.router.navigate(['accueil-logged']);

    }, err => {
      alert(err.message)
      this.router.navigate(['/login']);

    })

  }

  registerPro(email : string, password : string){
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then( cred => {
      return this.UserDb.collection('users').doc(cred?.user?.uid).set({
        isPro: true,
      });
    }).then( () => {
      alert('register successful');
      this.router.navigate(['accueil-logged']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/register-pro']);

    })

  }

  register(email : string, password : string){
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then( cred => {
      return this.UserDb.collection('users').doc(cred?.user?.uid).set({
        isPro: false,
      });
    }).then( () => {
        alert('registration successful');
        this.router.navigate(['/login']);
      }, err =>{
      alert(err.message);
      this.router.navigate(['/login']);
    } )
  }

  logout(){
    this.firebaseAuth.signOut().then( () =>{
      this.router.navigate(['/accueil']).then(r =>
        alert('logout successful'));



    }, err =>{
      alert(err.message);
    })

  }
}


