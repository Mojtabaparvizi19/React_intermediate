interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;

function authReducer(user: string, action: AuthAction): string {
  if (action.type === "LOGIN") return (user = action.username);
  if (action.type === "LOGOUT") return (user = "");
  return user;
}

export default authReducer;
