import { useState } from "react";
import Home from "./Home";
import Create from "./Create";

const Navbar = () =>{

    const [currentView, setCurrentView] = useState("Home");

    return(
     <div>
        <nav className="Navbar">

                <h2>Blog Post</h2>
            
            <div className="Links">
            <ul>
                <li><a href="#" onClick={() => setCurrentView ("Home")}>Home</a></li>
                <li><a href="#" onClick={()=> setCurrentView("Create")}>Create</a></li>
            </ul>
             </div>
                 
        </nav>
        <div>
             {currentView === "Home" && <Home/>}
             {currentView === "Create" && <Create/>}
        </div>
        </div>
   
    );
}
export default Navbar;