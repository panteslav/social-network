import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.post}>{props.text}</div>
      <button>Like {props.likesCount}</button>
    </div>
  );
};

export default Post;
