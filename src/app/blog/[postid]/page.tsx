import React from "react";

const DetailsPage = ({ params }: { params: { postid: string } }) => {
  return (
    <div>
      <h1 className="text-9xl">Details Page {params.postid}</h1>
    </div>
  );
};

export default DetailsPage;
