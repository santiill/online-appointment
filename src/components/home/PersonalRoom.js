import React, { useState } from "react";
import "./PersonalRoom.css";
import { BiUserCircle, BiPencil, BiTime } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { FiLogOut, FiCalendar } from "react-icons/fi";

const PersonalRoom = () => {
  const [showRoom, setShowRoom] = useState(false);
  const showMenuBar = () => setShowRoom(true);
  const closeMenuBar = () => setShowRoom(false);

  const logout = () => {
    localStorage.clear("token");
    closeMenuBar();
    console.log("first");
    window.location.reload();
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="room">
      <BiUserCircle onClick={showMenuBar} className="room_open_icon" />
      {/* <h4 >
        Room
      </h4> */}
      <div className={showRoom ? "room_menu active" : "room_menu"}>
        <div className="user">
          <li onClick={closeMenuBar} className="room_cancel">
            &#x2039;
          </li>
          <MdPersonOutline className="room_icon" />
          <span>
            {user.firstName} {user.lastName}
            {/* <br /> Алшановна */}
          </span>
        </div>
        <ul className="room_menu_items">
          <li className="room_menu__item">
            <FiCalendar className="room_icon" /> Ближайщие записи
          </li>
          <li className="room_menu__item">
            <BiPencil className="room_icon" /> Запись на прием
          </li>
          <li className="room_menu__item">
            <BiTime className="room_icon" /> История посещений
          </li>
          <li className="room_menu__item">
            <RiMessage3Line className="room_icon" /> Отзывы
          </li>
          <hr />
          <li onClick={logout} className="room_menu__item">
            <FiLogOut className="room_icon" /> Выйти
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalRoom;
