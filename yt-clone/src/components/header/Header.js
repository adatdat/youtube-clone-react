import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-darks header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header_logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://i.pinimg.com/236x/e9/71/69/e971694c70e8f181f94f0be7a4a60529.jpg"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
