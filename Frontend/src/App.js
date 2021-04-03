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
        <p>Welcome {firebase.auth().currentUser.displayName}, {firebase.auth().currentUser.email}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

class Resumes extends React.Component {
  state = {
    my_resume_list: null
  };
  
  async componentDidMount() {
    const response = await fetch('https://17suopjdzb.execute-api.us-east-1.amazonaws.com/resume-list')
    const resume_list = await response.json()
    // save it to your components state so you can use it during render
    this.setState({my_resume_list: resume_list})
    console.log(resume_list)
  };

  render() {
    return (
      <div>
        <div className="title">My Resume List</div>
        <ul>
        {
          this.state.my_resume_list && this.state.my_resume_list.map(my_resume_list => {
            return (
              <li>
                <div>user_id: {my_resume_list.user_id}</div>
                <div>resume_id: {my_resume_list.resume_id}</div>
                <div>resume_name: {my_resume_list.resume_name}</div>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
  
}



function App() {
  // state = {
  //   my_resume_list: null
  // };

  // async function componentDidMount() {
  //   const response = await fetch('https://17suopjdzb.execute-api.us-east-1.amazonaws.com/resume-list')
  //   const resume_list = await response.json()
  //   // save it to your components state so you can use it during render
  //   this.setState({my_resume_list: resume_list})
  //   console.log(my_resume_list)
  // };

  return (
    <div className="App">
      <header className="App-header">
        
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

          {/* {
	"user_id": "1",
      "resume_id": "1",
	"resume_name": "Sample Resume 1",
	"date_created": "March 30, 2020",
      "date_modified": "April 01, 2021"
	},
	{
	"user_id": "1",
      "resume_id": "2",
	"resume_name": "Sample Resume 2",
	"date_created": "March 30, 2020",
      "date_modified": "April 01, 2021"
	} */}

        <table class="result-row">
          <tr>
              <td>resume id</td>
              <td> resume name</td>
              <td>date created</td>
              <td>date modified</td>
          </tr>
          <tr>
              <td>1</td>
              <td>Sample Resume 1</td>
              <td>March 30, 2020</td>
              <td>April 01, 2021</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Sample Resume 2</td>
              <td>March 30, 2020</td>
              <td>April 01, 2021</td>
          </tr>
        </table>

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

export default SignInScreen;
//export default App;
