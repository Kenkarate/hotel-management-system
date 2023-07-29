import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";

function ListRooms() {
  const [roomList, setRoomList] = useState("");

  const RoomCollection = collection(db, "rooms");

  //   Add a Room
  const handleSubmit = async () => {
    try {
      const data = await getDocs(RoomCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRoomList(filteredData);
      // console.log(filteredData);
      // roomList.map((item)=>console.log(item.Price))
    } catch (err) {
      console.log(err);
    }
  };

  //   Delete a Room
  const deleteRoom = async (id) => {
    const roomDoc = doc(db, "rooms", id);
    await deleteDoc(roomDoc);
  };


  // calling the list
  useEffect(() => {
    handleSubmit();
  }, [deleteRoom]);
  return (
    <div>
      <Sidebar />
      <div className="ml-[20vw] pt-[12vh] mr-10">
        <div className="float-right mr-10">
          <a href="/add-room" className="border rounded bg-green-400 p-1">
            Add New Room
          </a>
        </div>
        <h2 className="my-5 text-3xl font-semibold">Rooms</h2>

        <table className="w-full border ">
          <thead>
            <tr className="border">
              <td className=" py-4 text-xl font-bold text-center">Name</td>
              <td className=" py-4 text-xl font-bold text-center">Price</td>
              <td className=" py-4 text-xl font-bold text-center">Category</td>
              <td className=" py-4 text-xl font-bold text-center">Floor</td>
              <td className=" py-4 text-xl font-bold text-center">
                Room Number
              </td>

              <td className=" py-4 text-xl font-bold text-center">Bed Type</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {roomList &&
              roomList.map((rooms, key) => {
                return (
                  <tr
                    key={key}
                    style={{
                      backgroundColor: rooms.Availablility
                        ? "#f0fdf4"
                        : "#fecaca",
                    }}
                    className="border hover:bg-green-200"
                  >
                    <td className="py-2 text-center">{rooms.RoomName}</td>
                    <td className="py-2 text-center">{rooms.Price}</td>
                    <td className="py-2 text-center">{rooms.Category}</td>
                    <td className="py-2 text-center">{rooms.Floor}</td>
                    <td className="py-2 text-center">{rooms.RoomNumber}</td>
                    <td className="py-2 text-center">{rooms.BedType}</td>
                    <td className="flex gap-2 py-2">
                      <RiEditFill />
                      <button onClick={() => deleteRoom(rooms.id)}><RiDeleteBin6Fill  /></button>
                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListRooms;
