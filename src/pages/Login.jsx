
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated, dispatch } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    dispatch({
      type: "LOGIN",
      payload: { id: 1, name: "Shambhu" },
    });

    navigate("/settings");
  }

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div>
      <h2>Login</h2>

      {isAuthenticated ? (
        <>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
