import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection,collectionData  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Cvs from '../interfaces/cvsEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private firestore: Firestore) { }

  addEvents(dataCvs: Cvs){
    const cvsRef = collection(this.firestore, 'Events');
    return addDoc(cvsRef, dataCvs);
  }

  getAllEvents(): Observable<Cvs[]>{
    const cvsRef = collection(this.firestore, 'Events');
    return collectionData(cvsRef, {idField: 'id'}) as Observable<Cvs[]>;
  }
}
