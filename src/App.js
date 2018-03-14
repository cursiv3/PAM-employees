import React from "react";
import DesktopView from "./views/Desktop/DesktopView";
import MobileView from "./views/Mobile/MobileView";
var employees = require("./employees.json");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "desktop"
    };
    this.displayHandler = this.displayHandler.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    if (window.innerWidth > 800) {
      this.setState(Object.assign({}, { display: "desktop" }));
    } else if (window.innerWidth < 800) {
      this.setState(Object.assign({}, { display: "mobile" }));
    }
    this.forceUpdate();
  }

  displayHandler() {
    if (this.state.display === "desktop") {
      return <DesktopView json={employees} />;
    } else {
      return <MobileView json={employees} />;
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return <div className="app-container">{this.displayHandler()}</div>;
  }
}

export default App;
