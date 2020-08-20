  
import app, { firestore } from "firebase/app";
import "firebase/auth";
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpttz2vl7fVr2hjjejA4Q70KYdsxcUinQ",
  authDomain: "testapp-1ca7c.firebaseapp.com",
  databaseURL: "https://testapp-1ca7c.firebaseio.com",
  projectId: "testapp-1ca7c",
  storageBucket: "testapp-1ca7c.appspot.com",
  messagingSenderId: "640572594335",
  appId: "1:640572594335:web:d8a7650b8e7c535c97aaaa",
  measurementId: "G-ENN1CJ1S7F"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = firestore()
  }
  login(email,password){
    return this.auth.signInWithEmailAndPassword(email,password)
  }
  logout() {
    this.auth.signOut()
  }
  
  async register(name,email,password){
    await this.auth.createUserWithEmailAndPassword(email,password) 
      return this.auth.currentUser.updateProfile({
        displayName: name
      })
    
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }
  getCurrentUserName(){
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

}

export default new Firebase()