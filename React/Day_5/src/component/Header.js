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


export default Header;