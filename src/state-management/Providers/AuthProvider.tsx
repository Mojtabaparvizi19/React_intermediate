import { Children, ReactNode, useReducer } from "react";
import authReducer from "../reducer/authReducer";
import AuthContext from "../contexts/authContext";

interface Prop {
  children: ReactNode;
}

function AuthProvider({ children }: Prop) {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
