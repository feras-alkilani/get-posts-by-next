"use client";

import React, { useState, useEffect } from "react";
import LoadingPostDetails from "../posts/[postID]/loading";

export default function PostDetails({ postID }) {
  const postId = postID;
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post details from API
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [postId]);

  if (!post) {
    return <LoadingPostDetails />;
  }

  return (
    <div
      style={{
        width: "70%",
        background: "white",
        padding: "10px",
        borderRadius: "10px",
        color: "black",
        marginBottom: "10px",
        marginTop: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)"
      }}
    >
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}
