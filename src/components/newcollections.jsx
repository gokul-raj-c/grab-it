import "../assets/css/newcollection.css";
import { Link } from "react-router-dom";

const NewCollections = () => {
  return (
    <>
    <p className="heading">CATEGORY</p>
    <div className="image-grid">
        
          <div className="image-card">
          <Link to="/electronics">
          <img src="https://www.shutterstock.com/image-illustration/group-home-appliances-consumer-electronics-600nw-2451385301.jpg" alt="Electronics"/>
          <div className="image-caption">ELECTRONICS</div>
          </Link>
          </div>
          <div className="image-card">
            <Link to="/watches">
            <img src="https://www.shutterstock.com/image-photo/gold-fashionable-elegant-watch-classic-260nw-2477327319.jpg" alt="Women's fashion" />
            <div className="image-caption">WATCHES</div>
            </Link>
          </div>
          <div className="image-card">
            <Link to="/clothings">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rHC9MY-Rw4WHQQRvZ8JozA7o665CZE4nxw&s" alt="Kids fashion" />
            <div className="image-caption">CLOTHINGS</div>
            </Link>
          </div>
        </div>
        </>
  );
};

export default NewCollections;
