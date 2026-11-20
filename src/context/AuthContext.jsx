
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(action.payload));

      return {
        isAuthenticated: true,
        currentUser: action.payload,
      };

    case "LOGOUT":
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("currentUser");

      return {
        isAuthenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
