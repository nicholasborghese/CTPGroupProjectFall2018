import React from "react";
import Emoji from "react-emoji-render";
function Upcoming(props) {
  return (
    <div>
      <Emoji style={{ fontSize: "61px" }} className="align-text-center h1" text="Coming Soon to Heroes Food ✊" />
      <ul style={{ fontSize: "35px", paddingTop: "60px" }} className="text-left p" >
        <li ><span>Add reviews and ratings to restaurants</span></li>
        <li >Recommend restaurants to users based on their reviews</li>
        <li >Add comments to reviews</li>
        <li >Direct Messaging System similiar to Facebook Messenger</li>
        <li >And much, MUCH MORE</li>
      </ul>
      <div style={{ paddingTop: "35px" }} className="text-center">
      <h1>So heed the words of Lil Dicky and ...</h1>
        <img style={{ paddingTop : "40px", width: "400px", height: "400px" }} src="https://media.giphy.com/media/1ken0zzzL79NPy3QZj/giphy.gif" />
      </div>
    </div>);
}

export default Upcoming;


