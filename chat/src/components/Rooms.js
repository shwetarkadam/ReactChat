
 const Rooms = ({ currentRoom,  setCurrentRoom,setShowListMenu}) => {
    const handleRoomChange = (room) => {
      setCurrentRoom(room);
      setShowListMenu(false);
    };
    return (
      <div className="rooms">
        <h2>Select room</h2>
        <ul>
          <li
            onClick={() => {
              handleRoomChange("Geeks And Nerds Unite");
            }}
            className={currentRoom === "Geeks And Nerds Unite" ? "active" : ""}
          >
          Geeks And Nerds Unite
          </li>
          <li
            onClick={() => {
              handleRoomChange("Private");
            }}
            className={currentRoom === "Private" ? "active" : ""}
          >
            Private
          </li>
          <li
            onClick={() => {
              handleRoomChange("General");
            }}
            className={currentRoom === "General" ? "active" : ""}
          >
            General
          </li>
          <li
            onClick={() => {
              handleRoomChange("Friends");
            }}
            className={currentRoom === "Friends" ? "active" : ""}
          >
            Friends
          </li>
          <li
            onClick={() => {
              handleRoomChange("JavaScript");
            }}
            className={currentRoom === "JavaScript" ? "active" : ""}
          >
            JavaScript
          </li>
        </ul>
      </div>
    );
  };
  
export default Rooms;