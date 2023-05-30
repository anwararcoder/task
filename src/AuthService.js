const API_URL = "http://localhost:5000";

const AuthService = {
  login: (email, password) => {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
  },

  register: (name, phone, email, password) => {
    return fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },

  logout: () => {
    localStorage.clear()
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;