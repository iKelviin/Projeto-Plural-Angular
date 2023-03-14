import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query } from '@angular/fire/firestore';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor
  (
    private firestore: Firestore
  ) { }

  /*get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }*/

  /*get allUsers$(): Observable<ProfileUser[]> {
    const ref = collection(this.firestore, 'users');
    const queryAll = query(ref);
    return collectionData(queryAll) as Observable<ProfileUser[]>;
  }*/


  /*addMessage(): Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid);
    return from(setDoc(ref, user));
  }*/

  /*updateMessage(): Observable<any> {
    //const ref = doc(this.firestore, 'users', user?.uid);
    //return from(updateDoc(ref, { ...user }));
  }*/

}
