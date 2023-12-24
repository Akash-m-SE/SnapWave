import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import Snapwave_logo from "../assets/Snapwave_logo.jpeg";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-white font-bold hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 text-black font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";

import { categories } from "../utils/data";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-cyan-700 h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex p-x-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img
            src={Snapwave_logo}
            alt="logo"
            className="w-full m-5 sm:m-3 object-cover"
          />
        </Link>

        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="px-5 text-base 2xl:text-xl font-bold">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                alt="category"
                className="w-8 h-8 rounded-full shadow-sm"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {user && (
        <Link
          to={`/user-profile/${user._id}`}
          title={`${user.userName}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p className="font-bold">{user.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
