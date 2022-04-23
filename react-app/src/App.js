import React from "react";

import "./index.css";
import Navbbb from "./components/Nav"
import Heading from "./components/Heading"

// 2 種宣告 component 的方式
// 1. element class with render() method
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <div className="acer_margin">
//           <Heading name="最新消息 News"/>
//           <Heading name="News"/>
//         </div>
//       </div>
//     );
//   }
// }

// 2. defined as a function.
export default function App() {
  return (
      <div className="container">
          <Navbbb />
          <div className="acer_margin">
            <Heading name="最新消息 News" />
            <Heading name="政府採購專區 Government procurement" />
          </div>
      </div>
  )
}