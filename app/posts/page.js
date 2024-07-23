import PostItem from "./postItem"; // تأكد من المسار الصحيح لمكون PostItem

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 }
  });
  const posts = await response.json();

  return (
    <div>
      <h1>Posts Page</h1>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      {/* <Todo /> */}
    </div>
  );
}
