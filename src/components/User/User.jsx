import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const User = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  useEffect(() => {
    console.log("Logged in as:", email);
    if (!email) {
      navigate("/signin");
    }
  }, [email, navigate]);

  if (!email) return null; // Prevents blank render before redirect

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, {email}</p>
    </div>
  );
};

export default User;
