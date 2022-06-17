import { Component, OnInit, Input } from '@angular/core';
import {Activite} from "../classes/activites";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "../services/firebase.service";
import {Router} from "@angular/router";
import {ActivitesPres} from "../classes/activitesPres";

@Component({
  selector: 'app-carousel-index',
  templateUrl: './carousel-index.component.html',
  styleUrls: ['./carousel-index.component.css']
})
export class CarouselIndexComponent implements OnInit {


  @Input() ActiviteArray!: ActivitesPres[];

  constructor(private _sanitizer: DomSanitizer, private db : AngularFirestore, private auth : AngularFireAuth, private fb : FirebaseService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.ActiviteArray);

  }

  readMore(id: string) {
    this.router.navigate(['/', 'afficher-activite', id]);
  }
}
