
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/profile/1">Profile</Link>{" | "}
        <Link to="/settings">Settings</Link>{" | "}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
