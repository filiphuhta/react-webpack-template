
import React from "react";
import "./App.scss";
const App = () => {
  return (
    <div className="container">
      <div className="container-start">
        <h1 className='container-start__heading'>Simple React app with babel & webpack template.</h1>
      </div>

      <h2 className="container-files">Available files</h2>

      <div className="container-app-js">
        <h2 className="container-app-js__heading">App.js</h2>
        <p className="container-app-js__text">This is your starting point for your React application which rendered in the index.html file.</p>
      </div>

      <div className="container-app-scss">
        <h2 className="container-app-scss__heading">App.scss</h2>
        <p className="container-app-scss__text">This is a example scss file which is connected with App.js.</p>
      </div>

      <div className="container-index-html">
        <h2 className="container-index-html__heading">index.html</h2>
        <p className="container-index-html__text">This is where all your .html code is created.</p>
      </div>

      <div className="container-index-js">
        <h2 className="container-index-js__heading">index.js</h2>
        <p className="container-index-js__text">This is where all your .js code is created.</p>
      </div>

      <div className="container-github">
        <a  href="https://github.com/filiphuhta"> <p>Filip Huhta @Github</p> </a>
      </div>
    </div>
  );
};

export default App;