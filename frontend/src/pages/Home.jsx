import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import CardSkeleton from "../components/CardSkeleton";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const [num, setNum] = useState(["1", "2", "3"]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();

      if (data.totalPosts > 0 || !res.ok || data.posts.length < 1) {
        setSkeleton(false);
      }
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Welcome to movies Blog
        </h1>

        <p className="text-gray-500 text-xs sm:text-sm">
          This is a demo project. Here you can find a variety of articles,
          reviews and ratings of movies in different languages.
        </p>

        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>

            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto p-3 py-7 flex justify-evenly">
        {skeleton ? (
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              {num.map((item, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
