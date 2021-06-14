import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img src="https://i.ytimg.com/vi/yLDQkKFZf0g/hq720_live.jpg?sqp=CJTSnYYG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRS4yBN8wm0knxeFeu8hBud14ydQ" alt="" />
        <span>05:43</span>
      </div>
      <div className="video_title">Create app in 5 minutes made by TienDat</div>
      <div className="video_detail">
        <span>
          <AiFillEye /> 5m Views • 
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img src="https://yt3.ggpht.com/ytc/AAUvwniqqIyoF5YYg86lrgDIq0Jcko61cBva1MrPybbWSg=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
};

export default Video;
