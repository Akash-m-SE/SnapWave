import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import shareVideo from "../assets/share.mp4";

import logo from "../assets/snapwave_logo_animated.mp4";

import { client } from "../client";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    // console.log(response);

    // console.log("response.credential", response.credential);

    localStorage.setItem("user", JSON.stringify(response.credential));

    const expiration_Time = 1 * 60 * 60 * 1000;
    setTimeout(() => {
      localStorage.removeItem("user");
    }, expiration_Time);

    const decoded_auth_response = jwtDecode(response.credential);
    // console.log("decoded reponse", decoded_auth_response);
    // console.log("name", decoded_auth_response.name);
    // console.log("email", decoded_auth_response.email);
    // console.log("pic", decoded_auth_response.picture);
    // console.log(decoded_auth_response.picture);

    const { name, sub, picture } = decoded_auth_response;
    // console.log(name, sub, picture, sub);

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <video
              src={logo}
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
              className="w-50 h-60"
            />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
