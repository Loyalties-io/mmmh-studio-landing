import { ReactComponent as LogoSVG } from "./logo_big.svg";
import { ReactComponent as HeadingSVG } from "./loyalties_distorted.svg";
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
        <a href="https://loyalties.io">
          <HeadingSVG className="secondary-headline-svg" />
        </a>
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
