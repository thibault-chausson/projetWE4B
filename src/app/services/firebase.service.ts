import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth : AngularFireAuth, private router : Router) { }

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
      this.router.navigate(['/accueil']).then(r =>
        alert('logout successful'));



    }, err =>{
      alert(err.message);
    })

  }
}


