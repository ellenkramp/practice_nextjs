"use client";
import React from "react";

const Comment = ({
  params,
}: {
  params: { commentid: string; postid: string };
}) => {
  if (params.commentid === "1") {
    throw new Error("error loading");
  }
  return (
    <div>
      <h1 className="text-slate-400">
        Comment {params.commentid} for post {params.postid}{" "}
      </h1>
    </div>
  );
};

export default Comment;
