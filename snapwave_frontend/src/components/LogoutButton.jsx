import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button
      type="button"
      className=" bg-white p-3 rounded-md cursor-pointer outline-none shadow-md place-items-center"
      onClick={() => {
        handleLogout();
      }}
      title="Logout"
    >
      <AiOutlineLogout color="red" fontSize={21} />
    </button>
  );
};

export default LogoutButton;
