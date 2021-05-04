import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div><h1>hola react123!</h1></div>
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
(()=>{
    console.log("webpack");
})();