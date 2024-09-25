import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "This is the absolute title",
  },
};

const BlogPost = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>
        <Link href="/blog/1" replace>
          Blog Post 1
        </Link>
      </h1>
      <h1>
        <Link href="/blog/2">Blog Post 2</Link>
      </h1>
      <h1>
        <Link href="/blog/3">Blog Post 3</Link>
      </h1>
      <h1>
        <Link href="/blog/4">Blog Post 4</Link>
      </h1>
    </div>
  );
};

export default BlogPost;
