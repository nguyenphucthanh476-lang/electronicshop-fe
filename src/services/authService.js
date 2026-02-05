const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";
const API_URL = `${BASE_URL}/auth`;

// export async function login({ username, password }) {
//   const response = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Login failed");
//   }

//   const result = await response.json();
//   const rawToken = result.data?.token;

//   if (!rawToken) {
//     throw new Error("Token not found in response");
//   }

//   return rawToken;
// }

export async function login({ username, password }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "Login failed");
  }
  return json.data.accessToken;
}



export async function register(data) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Register failed");
  }

  return response.text();
}
