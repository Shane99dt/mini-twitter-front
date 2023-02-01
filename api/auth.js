import { APIKEY } from "@env";

const Signup = async (user) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/auth/v1/signup",
    {
      method: "POST",
      headers: {
        apikey: `${APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const response = await request.json();
  return response;
};

const Login = async (user) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/auth/v1/token?grant_type=password",
    {
      method: "POST",
      headers: {
        apikey: `${APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const response = await request.json();
  return response;
};

const User = async (token) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/auth/v1/user",
    {
      headers: {
        apikey: `${APIKEY}`,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

export { Signup, Login, User };
