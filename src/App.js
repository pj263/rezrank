import logo from './logo.svg';
import './App.css';

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
