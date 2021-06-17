import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";
import CategoriesBar from "../components/categoriesBar/CategoriesBar";

import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/video.action";
import { useSelector } from "react-redux";
import SkeletonVideo from "../components/skeletons/SkeletonVideo";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector((state) => state.homeVideo);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
