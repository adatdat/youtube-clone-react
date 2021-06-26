import React from "react";
import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration(10000).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const handleClick = () => {};

  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} className="videoHorizontal__left">
        <LazyLoadImage
          src="da"
          effect="blur"
          className={`videoHorizontal__thumbnail`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} className="p-0 videoHorizontal__right">
        <p className="mb-1 videoHorizontal__title">babbababa</p>

        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(10000).format("0.a")} Views •
          {moment("2021-06-06").fromNow()}
        </div>

        <p className="mt-1 videoHorizontal__desc">babalbala</p>

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          <LazyLoadImage
            src="das"
            effect="blur"
            className="testtt"
          />
          <p className="mb-0">dadaas</p>
        </div>
        <p className="mt-2"> Videos</p>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
