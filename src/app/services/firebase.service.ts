import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {


  userIsPro : boolean = false;
  isLogin: boolean = false;
  roleAs: string | null | undefined;


  constructor(private firebaseAuth : AngularFireAuth, private router : Router, private UserDb : AngularFirestore) { }

  console = console;


  //login method
  login(email : string, password : string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then( cred => {
      this.UserDb.collection('users').doc(cred?.user?.uid).ref.get().then(user => {
        if (user.get('isPro') == true){
          localStorage.setItem('STATE', 'true');
          this.roleAs = 'pro';
          localStorage.setItem('ROLE', this.roleAs);
          this.userIsPro = true;
          console.log("Document data:", user.data());
          alert("Vous êtes connecté en tant que professionnel");
          this.router.navigate(['/accueil-logged']);
        } else {
          localStorage.setItem('STATE', 'true');
          this.roleAs = 'user';
          localStorage.setItem('ROLE', this.roleAs);
          this.userIsPro = false;
          alert("Vous êtes connecté en tant que particulier");
          console.log("Cet utilisateur n'est pas un professionnel");
          this.router.navigate(['/accueil-logged']);
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }, err => {
      alert(err.message)
      this.router.navigate(['/login']);

    })

  }

  registerPro(email : string, password : string, nomEntreprise: string, numNomRue : string, ville : string, pays : string, codePostale : string, telephone : string ){
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then( cred => {
      this.UserDb.collection('professional').doc(cred?.user?.uid).set({
        emailPro: email,
        nomEntreprise: nomEntreprise,
        numNomRue: numNomRue,
        ville: ville,
        pays: pays,
        codePostale: codePostale,
        telephone: telephone,
      })
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
      this.isLogin = false;
      this.roleAs = '';
      localStorage.removeItem('ROLE');
      this.router.navigate(['/accueil']).then(r =>
        alert('logout successful'));
    }, err =>{
      alert(err.message);
    })

  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }




  addActivite(inputNomActi : string, inputNomRes : string, inputAddress : string, inputAddress2 : string, inputCity : string, inputState : string, inputZip : string, inputTel : string, inputPrix : number, inputCate : string, inputDoma : string, inputDes : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).set({
        inputNomActi: inputNomActi,
        inputNomRes: inputNomRes,
        inputAddress: inputAddress,
        inputAddress2: inputAddress2,
        inputCity: inputCity,
        inputState: inputState,
        inputZip: inputZip,
        inputTel: inputTel,
        inputPrix: inputPrix,
        inputCate: inputCate,
        inputDoma: inputDoma,
        inputDes: inputDes,
      }).then( () => {
        alert('activité ajoutée');
        this.router.navigate(['/gestion-pro']);
      });
    });


  }
}



// End of file
