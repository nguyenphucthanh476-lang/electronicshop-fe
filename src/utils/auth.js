// File: `src/utils/auth.js`
import { jwtDecode } from "jwt-decode";

export const TOKEN_KEY = "auth_token";

export function saveToken(token, remember = true) {
    // remember = true -> persist across sessions using localStorage
    // remember = false -> keep only for this tab/session using sessionStorage
    if (remember) {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        sessionStorage.setItem(TOKEN_KEY, token);
    }
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || null;
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
}

export function getUserFromToken() {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = jwtDecode(token);

    const role =
      payload.role ||
      payload.roles?.[0] ||
      payload.authorities?.[0];

    return {
      username: payload.sub || payload.username,
      role,
      exp: payload.exp
    };
  } catch (e) {
    console.error("Invalid token format", e);
    return null;
  }
}


// Optional: helper to add Authorization header to fetch calls
export function authHeaders() {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
}