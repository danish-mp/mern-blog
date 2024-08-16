export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Movies Blog project
          </h1>
          
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to my movies blog. This is a demo project. In this you can
              see the image, notes and reviews of movies in different languages.
            </p>

            <div>
              <h4 className="text-xl font-semibold underline">
                These features have been added to the Movies Blog project
              </h4>
              <p>
                Sign in, Sign up, Dark and Light theme, User profile update,
                Image upload, Search, Sort, Filtering, Pagination, Comments,
                Likes and Dislikes, Edit Comments and Posts, Delete Comments and
                Posts and Users accounts, etc..
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline">Tech-Stacks</h4>
              <p>
                JWT | React-Redux | Redux-Persist | Cookie-Parser | Tailwind-CSS
                | Flowbite-React | BcryptJs | React-Icons | Dotenv | Vite |
                MongoDB | Express | React | NodeJs. etc..
              </p>
            </div>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
