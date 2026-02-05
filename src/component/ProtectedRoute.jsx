import { Navigate } from "react-router-dom";
import { useAuth } from "../component/AuthContext";

function ProtectedRoute({ children, role }) {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  const { user } = auth;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
