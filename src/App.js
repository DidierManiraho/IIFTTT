
import './App.css';

import TopNav from "./TopNav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";


function App() {
  return (
      <div>
        <TopNav/>

        <div className="w-1/2 mx-auto mt-10">
          <Outlet/>
        </div>

        <Footer/>

      </div>
  );
}

export default App;
