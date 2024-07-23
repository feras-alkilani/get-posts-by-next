"use client";

import React, { Suspense } from "react";
import PostDetails from "@/app/components/postDetails";

export default function PostPage({ params }) {
  const postId = params.postID;

  const loadingJsx = <div>Loading...</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f0f4f8",
        margin: 0,
        padding: 0
      }}
    >
      <div>
        <h2
          style={{
            color: "#333"
          }}
        >
          Post Details
        </h2>
      </div>
      <Suspense fallback={loadingJsx}>
        <PostDetails postID={postId} />
      </Suspense>
    </div>
  );
}
