import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login_container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is made using Youtube API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
