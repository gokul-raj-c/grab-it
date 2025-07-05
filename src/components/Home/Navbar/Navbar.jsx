import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
         <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">GRAB iT</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/clothings" className="nav-link">Clothing</Link>
        <Link to="/watches" className="nav-link">Watches</Link>
        <Link to="/electronics" className="nav-link">Electronics</Link>
      </div>
      <div className="navbar-right">
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/cart" className="nav-link" title="Cart">🛒</Link>
      </div>
    </nav>
    );
}
export default Navbar;