
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { currentUser, dispatch } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  return (
    <div>
      <h1>Settings</h1>
      <p>Welcome, {currentUser?.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
