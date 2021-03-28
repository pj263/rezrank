import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
 
// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCzQSlzv5ddaqSRqwIXtClgbWhz2nwTVY8",
  authDomain: "rezrank.firebaseapp.com",
  projectId: "rezrank",
  storageBucket: "rezrank.appspot.com",
  messagingSenderId: "336060146712",
  appId: "1:336060146712:web:b929b8a6cbec2c63b10f6d",
  measurementId: "G-603ESNWTXR"
};

firebase.initializeApp(firebaseConfig);
 
class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a> */}
        <p>Home</p>
        <section>
          <p>firstname_lastname@xyz.com <span style={{color:"red"}}>O</span></p>
        </section>
        
      </header>
      
      <body class="App-body">

        <div class="field is-grouped section">
          {/* <div class = "is-flex-direction-row"> */}
            <img src="./documents.svg" className="" alt="logo" height = "50" width="50"/>
            <p class="control">
              <button class="option button is-large is-rounded">
                Create New Resume
              </button>
            </p>
          </div>
          
        <div class="field is-grouped section">
        {/* <div class = "is-flex-direction-row"> */}
          <img src="./writing.svg" className="" alt="logo" height = "50" width="50"/>
          <p class="control">
            <button class="option button is-large is-rounded">
              Open Existing Resume
            </button>
          </p>
          </div>

        <div class="field is-grouped section">
      {/* <div class = "is-flex-direction-row"> */}
        <img src="./archive.svg" className="" alt="logo" height = "50" width="50"/>
        <p class="control">
          <button class="option button is-large is-rounded">
            Review Resume
          </button>
        </p>
        </div>
      
      

      </body>

    </div>
  );
}

export default App;
