import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";
//array of card
// const arr = [
//   {
//     cloth: "T-shirt",
//     offer: "20-40% off",
//     price: 200,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d952e50dea28254a0d1543",
//   },
//   {
//     cloth: "Jeans",
//     offer: "34-45% off",
//     price: 400,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66f16e8488d9ed05b8093582",
//   },
//   {
//     cloth: "Shirt",
//     offer: "30-50% off",
//     price: 5000,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66f16e8488d9ed05b8093582",
//   },
//   {
//     cloth: "Hoodie",
//     offer: "25-35% off",
//     price: 900,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d852ff54bb27a74d01a492",
//   },
//   {
//     cloth: "sports",
//     offer: "40% off",
//     price: 1299,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d09d62892c8db36c04a526",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 600,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 800,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 900,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 899,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 999,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 1200,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   },
//   {
//     cloth: "Sweater",
//     offer: "50% off",
//     price: 99,
//     img: "https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/66d5cf6af170a8967305bf1a",
//   }
// ];

console.log(arr);

function App() {
  let [A, setA] = useState(arr);
  function sortArray() {
    A.sort((a, b) => a.price - b.price);
    setA([...A]);
    // console.log(A);
  }

  function priceAbove499(){
    const B = arr.filter((value)=>value.price > 499);
    setA(B);
  }
  return (
    <>
      <Header />
      <button onClick={sortArray}>Short By Price</button>
      <button onClick={priceAbove499}> Price above 499</button>
      <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
          //aha pe ek array return hor rha hai
          A.map((value, index) => (
            <Card
              key={index}
              cloth={value.cloth}
              offer={value.offer}
              img={value.img}
              price={value.price}
            />
          ))
        }
      </div>
      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
