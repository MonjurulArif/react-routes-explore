import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h1>Details About: {friend.name}</h1>
      <p>Call him/her: {friend.phone}</p>
      <h1>Everything you need to know about this person</h1>
    </div>
  );
};

export default FriendDetails;
