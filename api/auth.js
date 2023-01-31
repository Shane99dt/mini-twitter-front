const signup = async ({ user }) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/auth/v1/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "",
      },
      body: JSON.stringify(user),
    }
  );

  const response = await request.json();
  return response;
};

export { signup };
