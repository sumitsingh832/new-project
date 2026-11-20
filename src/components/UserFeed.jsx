import { useInfiniteQuery } from "@tanstack/react-query";

async function fetchUsers({ pageParam }) {
  const response = await fetch(
    `https://randomuser.me/api/?results=10&page=${pageParam}`
  );

  if (!response.ok) {
    throw new Error("Failed to load users.");
  }

  return response.json();
}

export default function UserFeed() {
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam }) => fetchUsers({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.info.page + 1,
  });

  if (isPending) {
    return <p>Loading users...</p>;
  }

  if (isError && !data) {
    return <p role="alert">{error.message}</p>;
  }

  return (
    <section>
      <h1>User Feed</h1>

      <div>
        {data.pages.map((page) =>
          page.results.map((user) => (
            <article key={user.login.uuid}>
              <img src={user.picture.medium} alt="" />
              <h2>
                {user.name.first} {user.name.last}
              </h2>
              <p>{user.email}</p>
            </article>
          ))
        )}
      </div>

      {isError && <p role="alert">{error.message}</p>}

      <button
        type="button"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </section>
  );
}
