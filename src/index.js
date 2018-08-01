import React from "react";
import ReactDOM from "react-dom";

import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";

// STYLES
import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
