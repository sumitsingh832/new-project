
const API_URL =
  "https://crudcrud.com/api/b0761b3b2ffd4625b9631252c3d2316b/tweets";

export async function getTweets() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tweets");
  }

  return response.json();
}

export async function createTweet(tweet) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweet),
  });

  if (!response.ok) {
    throw new Error("Failed to post tweet");
  }

  return response.json();
}

export async function likeTweet(tweet) {
  const response = await fetch(`${API_URL}/${tweet._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: tweet.text,
      userId: tweet.userId,
      likes: tweet.likes,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to like tweet");
  }

  return response.json();
}
