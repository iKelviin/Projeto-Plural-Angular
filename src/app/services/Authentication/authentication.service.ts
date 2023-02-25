import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, UserInfo } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { Observable } from 'rxjs';
import { concatMap, from, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: any,password: any){
    return from(signInWithEmailAndPassword(this.auth, username,password));
  }

  logout(){
    return from(this.auth.signOut());
  }

  signUp(name: any,email: any,password: any){
    return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe(
    switchMap(({user}) => updateProfile(user, { displayName: name})));
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<void> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Usuario não logado.');

        return updateProfile(user, profileData);
      })
    )
  }
}
