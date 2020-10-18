import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private itemsCollection: any;
  item: Observable<any>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('materiales');
    this.item = this.itemsCollection.valueChanges();
    console.log(this.item);
  }

  getMateriales(){
    return this.itemsCollection;
  }

}
