import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let internalToken = null;

export function getToken() {
  return internalToken;
}

export async function getTokenInternal() {
  const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      internalToken = data.access_token;
      return internalToken;
    }
  } catch (e) {}
  return false;
}

function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

export const AuthContext = createContext({
  token: null,
  setToken: () => null,
  isLoggedIn: null,
  setIsLoggedIn: () => null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  return (
    <AuthContext.Provider
      value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export function useToken() {
  // eslint-disable-next-line no-unused-vars
  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenInternal();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [setToken, token]);

  async function logout() {
    if (token) {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      navigate("/");
    }
  }

  async function login(username, password) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const token = await getTokenInternal();
      setToken(token);
      setIsLoggedIn(true);
      return;
    }
    let error = await response.json();
    setIsLoggedIn(false);
    return handleErrorMessage(error);
  }

  async function signup(email, full_name, password, employee_number) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/users`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        email,
        full_name,
        password,
        employee_number,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(employee_number, password);
    }
    return false;
  }

  return [token, login, logout, signup];
}

export const useUser = (token) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!token) {
      return;
    }

    async function getUser() {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/current_user`;
      const response = await fetch(url, {
        credentials: "include",
      });
      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);
      }
    }

    getUser();
  }, [token]);

  return user;
};
