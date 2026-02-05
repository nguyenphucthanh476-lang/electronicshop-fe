import { useState } from "react";
import "./Login.css";
import { saveToken, getUserFromToken } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/authService";
import { useAuth } from "../component/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();`x`
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await loginApi({ username, password });

      saveToken(token, remember);

      const user = getUserFromToken();
      if (!user) {
        throw new Error("Invalid token");
      }

      login({
        username: user.username,
        role: user.role,
        accessToken: token
      });

      if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label style={{ display: "block", margin: "8px 0" }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />{" "}
          Remember me
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-footer">
          Don’t have an account?
          <Link to="/register" className="register-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
