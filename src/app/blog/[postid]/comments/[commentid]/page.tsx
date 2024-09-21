import React from "react";

const Comment = ({
  params,
}: {
  params: { commentid: string; postid: string };
}) => {
  return (
    <div>
      <h1 className="text-slate-400">
        Comment {params.commentid} for post {params.postid}{" "}
      </h1>
    </div>
  );
};

export default Comment;
