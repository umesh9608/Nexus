// import React from "react";
// import ReactDOM from "react-dom/client";

// //in this type we create a single card but i wnat to create multaple card with different value(img,offer,name) then we use callect all data in a single array and use to .map function to itrate for show all value
// function Card(props) {
//   return (
//     <div style={{ border: "2px solid black", padding: "2px" }}>
//       <img
//         src="https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a"
//         height="200px"
//         width="200px"
//         alt="cloth"
//       />
//       <div style={{ textAlign: "center" }}>
//         <h2>{props.cloth}</h2>
//         <h1>{props.offer}</h1>
//         <h2>Shop Now</h2>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {/* this is not best approach to pass value one by one  */}
//       <Card cloth="T-shirt" offer="20-60% off" />
//       <Card cloth="Jeans" offer="20-30% off" />
//       <Card cloth="T-pant" offer="20-40% off" />
//       <Card cloth="Kurta" offer="34-54% off" />
//     </div>
//   );
// }

// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<App />);

//************so now we do best apporach to pass different value in cade one by one by using array and array.mpa */

import React from "react";
import ReactDOM from "react-dom/client";

//create card
function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px" }}>
      <img src={props.img} height="200px" width="200px" alt="cloth" />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

//Hader
function Header() {
  return (
    <div className="heading">
      <img  className="images" src="https://images.indianexpress.com/2021/01/myntra.png" height="80px" width="80px" />
      <div className="option">
        <button className="btn">Men</button>
        <button className="btn">Women</button>
        <button className="btn">Kids</button>
        <button className="btn">Home and Leaving</button>
        <button className="btn">Beauty</button>
        <button className="btn">Studio</button>
      </div>
      <input  className="searchbar"placeholder="search for procuct brands and more"></input>
      <div className="Profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>
    </div>
  );
}


//Footer
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Myntra Clone</h3>
        <p>© 2025. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
          className="social-icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="Instagram"
          className="social-icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="Twitter"
          className="social-icon"
        />
      </div>
    </div>
  );
}




function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* body */}
      <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
          //aha pe ek array return hor rha hai
          arr.map((value, index) => (
            <Card
              key={index}
              cloth={value.cloth}
              offer={value.offer}
              img={value.img}
            />
          ))
        }
      </div>
       {/* footer */}
       <Footer/>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);


// aha pe card ,hader, footer sb ek hi page me bt big site ke liye hme esko mudule me divide kre de the hai or saperate file me rkhte h jise component khete hai 
//aha se ab hm component create krenge ta ki hme jb kuch chnage krna ho to  component me change krenge like create folder Component->Card.js , Component>Header.js .....