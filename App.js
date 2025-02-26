import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./logo.svg";  
import landing from "./landing.png";  // Import PNG

function App() {
    return (
        <>  {/* React Fragment to wrap everything */}
            <div style={{ display: "flex", justifyContent: "space-between", boxShadow:"2px 1px 2px #eee",paddingLeft: "100px", paddingRight: "100px" }}>
                <img className="logo-img" style={{ width: "150px", maxHeight: "20px",paddingTop:"20px" }} src={logo} alt="Zerodha logo" />
                <div className="header-action" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ padding: "20px", color: "#666" }}>Sign In</div>
                    <div style={{ padding: "20px", color: "#666" }}>About US</div>
                    <div style={{ padding: "20px", color: "#666" }}>Products</div>
                    <div style={{ padding: "20px", color: "#666" }}>Pricing</div>
                    <div style={{ padding: "20px", color: "#666" }}>Support</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center",paddingTop:"100px"}}>
                <img src={landing} alt="Landing Image"
                style={{ maxWidth:"1000px"}} />
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <h1>Invest in everything</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <button style={{ color:"#fff",backgroundColor:"#387ed1", borderRadius: "5px",
                     fontSize: "1.25rem", fontWeight: "400",marginTop: "10px"}} className="my-button">SignUp for free</button> 
            </div>
        </>
    );
}








export default App;




// const nonjsx = React.createElement(
//     'div',
//     { id: 'parent' },
//     [
//         React.createElement('h1', { id: 'child1' }, "child1"),
//         React.createElement('h1', { id: 'child2' }, "child2")
//     ]
// );
// console.log("nonjsx",nonjsx);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>    
        <App />
    </>
);
