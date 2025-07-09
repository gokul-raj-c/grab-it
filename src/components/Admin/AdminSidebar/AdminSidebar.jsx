import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaPlus, FaBoxOpen, FaClipboardList } from "react-icons/fa";
import "./AdminSidebar.css"

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className={isActive("/admin/dashboard") ? "active" : ""}>
          <Link to="/admin">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </li>
        <li className={isActive("/admin/users") ? "active" : ""}>
          <Link to="/admin/users">
            <FaUsers /> <span>View Users</span>
          </Link>
        </li>
        <li className={isActive("/admin/addproduct") ? "active" : ""}>
          <Link to="/admin/addproduct">
            <FaPlus /> <span>Add Product</span>
          </Link>
        </li>
        <li className={isActive("/admin/products") ? "active" : ""}>
          <Link to="/admin/viewproduct">
            <FaBoxOpen /> <span>View Products</span>
          </Link>
        </li>
        <li className={isActive("/admin/bookings") ? "active" : ""}>
          <Link to="/admin/bookings">
            <FaClipboardList /> <span>View Bookings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
