import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['accueil']);

    }, err => {
      alert(err.message)
      this.router.navigate(['/login']);

    })
  }

  register(email : string, password : string){
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then( () =>{
      alert('registration successful');
      this.router.navigate(['/login']);

      }, err =>{
      alert(err.message);
      this.router.navigate(['/login']);
    } )
  }

  logout(){
    this.firebaseAuth.signOut().then( () =>{
      localStorage.removeItem('token');
      this.router.navigate(['/accueil']);
    }, err =>{
      alert(err.message);
    })
  }
}


