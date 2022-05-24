import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RegisterProComponent} from "../register-pro/register-pro.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db : AngularFirestore) { }

  //add professional
  addPro(pro : RegisterProComponent){

    pro.idPro = this.db.createId();
    alert('creation of the new super guide ID')
    return this.db.collection('/professional').add(pro);

  }
}
