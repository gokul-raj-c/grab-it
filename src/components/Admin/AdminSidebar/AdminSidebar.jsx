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
          <Link to="/admin/dashboard">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </li>
        <li className={isActive("/admin/users") ? "active" : ""}>
          <Link to="/admin/users">
            <FaUsers /> <span>View Users</span>
          </Link>
        </li>
        <li className={isActive("/admin/products/add") ? "active" : ""}>
          <Link to="/admin/products/add">
            <FaPlus /> <span>Add Products</span>
          </Link>
        </li>
        <li className={isActive("/admin/products") ? "active" : ""}>
          <Link to="/admin/products">
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
