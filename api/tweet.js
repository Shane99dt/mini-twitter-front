import { APIKEY } from "@env";

const PostTweet = async (token, user) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/rest/v1/tweet",
    {
      method: "POST",
      headers: {
        apikey: `${APIKEY}`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    }
  );

  const response = await request.json();
  return response;
};

const AllTweets = async (token) => {
  const request = await fetch(
    "https://nfljiprvibgxdgyskudx.supabase.co/rest/v1/tweet?select=*&order=created_at.desc",
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

const Tweet = async (token, id) => {
  const request = await fetch(
    `https://nfljiprvibgxdgyskudx.supabase.co/rest/v1/tweet?select=*&id=eq.${id}`,
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

const EditTweet = async (token, id) => {
  const request = await fetch(
    `https://nfljiprvibgxdgyskudx.supabase.co/rest/v1/tweet?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        apikey: `${APIKEY}`,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );

  const response = await request.json();
  return response;
};

const DeleteTweet = async (token, id) => {
  const request = await fetch(
    `https://nfljiprvibgxdgyskudx.supabase.co/rest/v1/tweet?id=eq.${id}`,
    {
      method: "DELETE",
      headers: {
        apikey: `${APIKEY}`,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  return response;
};

export { PostTweet, AllTweets, Tweet, EditTweet, DeleteTweet };
