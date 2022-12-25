import React from "react";
import "./storyContent.scss";
import moment from "moment";

function StoryContent({story}) {
  return (
    <div className="story-content-wrapper">
      <div className="story-title">{story?.story_name}</div>
      <div className="public-time">{moment(story?.created).format("DD/MM/YYYY")}</div>
      <div className="story-content" dangerouslySetInnerHTML={{__html: story?.content}} />
      <div className="underline"></div>
      <div className="author">appnetmedia</div>
    </div>
  );
}

export default StoryContent;
