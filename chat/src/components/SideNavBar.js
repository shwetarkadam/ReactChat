import { useState } from "react";
import SignOut from "./SignOut";
import Rooms from "./Rooms";
import menu from "../images/white-menu.png";
import closeMenu from "../images/x-mark-32.png";
const SideNavBar = ({ user, currentRoom, setCurrentRoom }) => {
  const [showListMenu, setShowListMenu] = useState(false);

  return (
    <nav>
      <div>
        {user ? (
          <>
      <div className="title"><strong>  💬Shweta's Chat Room App</strong></div>
        <strong> Current room: <strong>{currentRoom}</strong></strong>
          </>
        ) : (
            <>
            No chat room available
            </>
        )}
      </div>
      {user ? (
        <>
          <button
            className="menu"
            onClick={() => {
              setShowListMenu(!showListMenu);
            }}
          >
            <img
              src={menu}
              alt="menu"
              style={{ opacity: showListMenu ? 0 : 1 }}
            />
            <img
              src={closeMenu}
              alt="menu-cross"
              style={{ opacity: showListMenu ? 1 : 0 }}
            />
          </button>
          <ul
            className="list-menu"
            style={{ top: showListMenu && user ? "10vh" : "-100vh" }}
          >
            <li  style={{ }}>
                <div > 
              <SignOut setShowListMenu={setShowListMenu} />
              </div>
            </li> 
            <li>
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowListMenu={setShowListMenu}
              /> 
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default SideNavBar;