import { Injectable } from '@angular/core';
import { Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential} from '@angular/fire/auth';
import { profile } from 'console';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential, UserInfo } from 'firebase/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email,password));
  }

  signUp(email: string, password: string): Observable<UserCredential>{
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  updateProfile(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Not Authenticated');
        return updateProfile(user, profileData);
      })
    );

  }
  
  logout(): Observable<any>{
    return from(this.auth.signOut());
  }
}
