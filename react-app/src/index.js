import React from "react"
import ReactDOM from "react-dom"

import App from "./App";

// (>18)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);

// (<18
// ReactDOM.render(<App />, document.getElementById("root"))