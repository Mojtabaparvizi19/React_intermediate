import React, { Dispatch } from "react";
import { AuthAction } from "../reducer/authReducer";

interface AuthContextProp {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextProp>({} as AuthContextProp);
export default AuthContext;
