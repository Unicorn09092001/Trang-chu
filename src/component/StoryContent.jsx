import React from "react";
import "./storyContent.scss";
import store from './../Story/story';

function StoryContent({story}) {
  return (
    <div className="story-content-wrapper">
      <div className="story-title">{story?.name}</div>
      <div className="public-time">Tháng Tư 11, 2022</div>
      <div className="story-content" dangerouslySetInnerHTML={{__html: story?.content}} />
      <div className="underline"></div>
      <div className="author">appnetmedia</div>
    </div>
  );
}

export default StoryContent;
