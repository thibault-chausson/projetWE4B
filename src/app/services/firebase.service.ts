import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {


  userIsPro: boolean = false;
  isLogin: boolean = false;
  roleAs: string | null | undefined;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private UserDb: AngularFirestore) {
  }

  console = console;


  //login method
  login(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(cred => {
      this.UserDb.collection('users').doc(cred?.user?.uid).ref.get().then(user => {
        if (user.get('isPro') == true) {
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
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    }, err => {
      alert(err.message)
      this.router.navigate(['/connexion']);

    })

  }

  registerPro(email: string, password: string, nomEntreprise: string, numNomRue: string, ville: string, pays: string, codePostale: string, telephone: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(cred => {
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
    }).then(() => {
      alert('register successful');
      this.login(email, password)
      //this.router.navigate(['gestion-pro']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/register-pro']);

    })

  }

  register(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(cred => {
      return this.UserDb.collection('users').doc(cred?.user?.uid).set({
        isPro: false,
      });
    }).then(() => {
      alert('registration successful');
      this.login(email, password)
      //this.router.navigate(['/accueil']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      this.isLogin = false;
      this.roleAs = '';
      localStorage.removeItem('ROLE');
      this.router.navigate(['/accueil']).then(r =>
        alert('logout successful'));
    }, err => {
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


  noter(note: number, id: string) {
    console.log(note);
    this.firebaseAuth.currentUser.then(user => {
      return this.UserDb.collection('activites').doc(user?.uid).collection('sous-acti').doc(id).set({
        note: note,
      });
    });
  }


  modifProfil(nomEntreprise: string, numNomRue: string, ville: string, pays: string, codePostale: string, telephone: string) {
    this.firebaseAuth.currentUser.then(user => {
      return this.UserDb.collection('professional').doc(user?.uid).set({
        nomEntreprise: nomEntreprise,
        numNomRue: numNomRue,
        ville: ville,
        pays: pays,
        codePostale: codePostale,
        telephone: telephone,
      }).then(() => {
        alert('profil modifié');
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate(['/gestion-pro/profil']));
      });
    });
  }


}


// End of file
