import React from "react";

// Input: liked: boolean
// Output: raise onClick event toggles like property
// open heart: <i class="fa fa-heart-o" aria-hidden="true"></i>
// full heart: <i class="fa fa-heart" aria-hidden="true"></i>

const Like = (props) => {
  let classes = "btn fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
