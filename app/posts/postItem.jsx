"use client";

import Link from "next/link";

// PostItem.js
export default function PostItem({ post }) {
  return (
    <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginBottom: "10px",
          marginTop: "20px",
          cursor: "pointer",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          textDecoration: "none"
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Link>
  );
}
