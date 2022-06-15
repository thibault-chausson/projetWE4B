import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivitesGestionProComponent} from "../activites-gestion-pro/activites-gestion-pro.component";
import {Activite} from "../classes/activites";
import {DomainesComponent} from "../domaines/domaines.component";
import {ActivitesPres} from "../classes/activitesPres";
import {where, query} from "firebase/firestore";
import {getDocs} from "@angular/fire/firestore";
import {CategoriesComponent} from "../categories/categories.component";
import {RecherchesComponent} from "../recherches/recherches.component";




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
          window.location.replace('/gestion-pro');
        } else {
          localStorage.setItem('STATE', 'true');
          this.roleAs = 'user';
          localStorage.setItem('ROLE', this.roleAs);
          this.userIsPro = false;
          alert("Vous êtes connecté en tant que particulier");
          console.log("Cet utilisateur n'est pas un professionnel");
          window.location.replace('/accueil');
        }
        return user;
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }, err => {
      alert(err.message)
      this.router.navigate(['/connexion']);

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
      this.router.navigate(['gestion-pro']);
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
        this.router.navigate(['/accueil-logged']);
      }, err =>{
      alert(err.message);
      this.router.navigate(['/register']);
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


 afficheProActivite(acti : ActivitesGestionProComponent){
   this.firebaseAuth.currentUser.then(user => {
     console.log(user?.uid);
     this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').get().subscribe(querrySnapshot => {
       querrySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         acti.nom = doc.get('inputNomActi');
         acti.description = doc.get('inputDes');
         acti.identifiant = doc.id;
         acti.date = doc.get('jour');
         acti.photo = doc.get('image1');

         acti.ActiviteArray.push(new Activite(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo));
       });
     });
   });
 }

  addActivite(inputNomActi : string, inputNomRes : string, inputAddress : string, inputAddress2 : string, inputCity : string, inputState : string, inputZip : string, inputTel : string, inputPrix : number, inputCate : string, inputDoma : string, inputDes : string, image1 : string, image2 : string, image3 : string, image4 : string, image5 : string, heure : string, jour : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc().set({
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
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        heure : heure,
        jour : jour,
      }).then( () => {
        alert('activité ajoutée');
        this.router.navigate(['/gestion-pro/statistiques']);
      });
    });


  }

  modifActivite(inputNomActi : string, inputNomRes : string, inputAddress : string, inputAddress2 : string, inputCity : string, inputState : string, inputZip : string, inputTel : string, inputPrix : number, inputCate : string, inputDoma : string, inputDes : string, image1 : string, image2 : string, image3 : string, image4 : string, image5 : string, heure : string, jour : string, idAci : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(idAci).set({
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
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        heure : heure,
        jour : jour,
      }).then( () => {
        alert('activité modifiée');
        this.router.navigateByUrl('/', {skipLocationChange : true}).then( () => this.router.navigate(['/gestion-pro/activites']));
      });
    });


  }

  //where("inputDoma", "==", "nature")


  afficheDomaineActivite(acti : DomainesComponent, domaine : any){
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputDoma", "==", domaine)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
          acti.nom = doc.get('inputNomActi');
          acti.description = doc.get('inputDes');
          acti.identifiant = doc.id;
          acti.date = doc.get('jour');
          acti.photo = doc.get('image1');
          acti.prix = doc.get('inputPrix');


          acti.ActivitesPresArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));

      });
      });
  }

  afficheCategorieActivite(acti : CategoriesComponent, categorie : any){
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputCate", "==", categorie)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        acti.photo = doc.get('image1');
        acti.prix = doc.get('inputPrix');


        acti.ActivitesPresArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));

      });
    });
  }


  afficheRecherche(acti : RecherchesComponent){
    acti.ActivitesPresArray = [];
    console.log('hello');
    console.log(acti.lieu);
    this.UserDb.collectionGroup('sous-acti', ref => ref.where("inputCity", "==", acti.lieu)).get().subscribe(querrySnapshot => {
      querrySnapshot.forEach((doc) => {
        console.log('hello');
        console.log(doc.data());
        acti.nom = doc.get('inputNomActi');
        acti.description = doc.get('inputDes');
        acti.identifiant = doc.id;
        acti.date = doc.get('jour');
        acti.photo = doc.get('image1');
        acti.prix = doc.get('inputPrix');

        acti.ActivitesPresArray.push(new ActivitesPres(acti.nom, acti.description, acti.date, acti.identifiant, acti.photo, acti.prix));
      });
    });
  }

  noter(note : number, id : string){
    console.log(note);
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(id).set({
        note: note,
      });
    });
  }

  supprimerActivite(idActivite : string){
    this.firebaseAuth.currentUser.then( user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(idActivite).delete();
    });
  }

}






// End of file
