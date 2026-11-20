
import { useQuery } from "@tanstack/react-query";
import { getTweets } from "../api/tweetsApi";
import TweetForm from "../components/TweetForm";
import TweetCard from "../components/TweetCard";

export default function Home() {
  const {
    data: tweets = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["tweets"],
    queryFn: getTweets,
  });

  if (isPending) {
    return <p>Loading tweets...</p>;
  }

  if (isError) {
    return <p>Failed to load tweets.</p>;
  }

  return (
    <div>
      <h1>Home Feed</h1>

      <TweetForm />

      <div>
        {tweets.map((tweet) => (
          <TweetCard key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
