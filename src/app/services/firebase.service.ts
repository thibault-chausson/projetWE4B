import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {DataService} from "../shared/data.service";
import {RegisterProComponent} from "../register-pro/register-pro.component";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router, private dt : DataService, private pro : RegisterProComponent) { }

  console = console;
  Pro : boolean = false;



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

  registerPro(pro : RegisterProComponent){
    this.firebaseAuth.createUserWithEmailAndPassword(pro.emailPro, pro.passwordPro).then( () => {
      alert('register successful');
      this.router.navigate(['accueil-logged']);

    }, err => {
      alert(err.message)
      this.router.navigate(['/register-pro']);

    })

  }

  register(email : string, password : string){
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then( () =>{
        //custom claims
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


