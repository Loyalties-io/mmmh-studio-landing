import { ReactComponent as LogoSVG } from "./logo.svg";
import secondaryHeadline from "./loyalties.png";
import "./App.css";

function App() {
  return (
    <div className="background-container">
      <div className="logo-container">
        <LogoSVG className="logo-svg" />
      </div>
      <div className="headline-container">
        <h1 className="headline">
          Bullshit Satz mit, something like Building the bridge between...
        </h1>
      </div>
      <div className="secondary-headline-container">
        <img
          src={secondaryHeadline}
          alt="Secondary Headline"
          className="secondary-headline"
        />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Contact details here</p>
          <p>Some links here</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
