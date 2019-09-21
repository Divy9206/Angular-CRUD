import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(error => console.log('Something goes Wrong'));
  }
  
  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response => console.log('Login Successfull'))
    .catch(error => console.log('Username and Password is wrong. Please enter valid details !!'));
  }
  constructor() { }
}
