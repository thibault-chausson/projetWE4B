import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-activites-gestion-pro',
  templateUrl: './activites-gestion-pro.component.html',
  styleUrls: ['./activites-gestion-pro.component.css']
})
export class ActivitesGestionProComponent implements OnInit {
  imagePath: any;

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore) {
  }

  ngOnInit(): void {
    this.db.collection('activites').doc('0lCtDUyu6GaNIWsMJIRUx6CnCsK2').get().subscribe( (doc) =>{

      if (doc.exists) {
        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(doc.get('image'));

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })


  }

}
