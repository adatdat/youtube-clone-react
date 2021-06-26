import React, { useEffect, useState } from "react";
import "./_video.scss";
import request from "../../api";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  const history = useHistory()

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`)
 }

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video_top">
        {/* <img src={medium.url} alt="" /> */}
        <LazyLoadImage src={medium.url} effect='blur' />
        <span className='video_top_duration'>{_duration}</span>
      </div>
      <div className="video_title">{title}</div>
      <div className="video_detail">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
        </span>{" "}
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_channel">
        <img src={channelIcon?.url} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
