import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function MainDashboard() {
  const [roomList, setRoomList] = useState("");

  const RoomCollection = collection(db, "rooms");
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const data = await getDocs(RoomCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRoomList(filteredData);
        // roomList.map((item)=>console.log(item.Price))
      } catch (err) {
        console.log(err);
      }
    };
    handleSubmit();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className=" ">
        <div className=" ml-[20vw] grid grid-cols-4 pt-[12vh] mr-10">
          <div className="bg-green-300 rounded p-5 m-5">Total Rooms : {roomList.length}</div>
          <div className="bg-orange-300 rounded p-5 m-5">Reservations : 50</div>
          <div className="bg-blue-300 rounded p-5 m-5">Staffs : 50</div>
          <div className="bg-gray-300 rounded p-5 m-5">Booked Rooms : 50</div>
          <div className="bg-lime-300 rounded p-5 m-5">
            Available Rooms : 50
          </div>
          <div className="bg-slate-300 rounded p-5 m-5">Checked In : 50</div>
        </div>
        <div className="my-10  ml-[20vw] pt-[12vh] mr-10">
          <h2 className="my-5 text-3xl font-semibold">Available Rooms</h2>
          <table className="w-full border bg-white  ">
            <thead>
              <tr className="border">
                <td className=" py-4 text-xl font-bold text-center">Name</td>
                <td className=" py-4 text-xl font-bold text-center">Price</td>
                <td className=" py-4 text-xl font-bold text-center">
                  Category
                </td>
                <td className=" py-4 text-xl font-bold text-center">Floor</td>
                <td className=" py-4 text-xl font-bold text-center">
                  Room Number
                </td>
                <td className=" py-4 text-xl font-bold text-center">
                  Cleaning Status
                </td>
                <td className=" py-4 text-xl font-bold text-center">
                  Bed Type
                </td>
              </tr>
            </thead>
            <tbody>
              {roomList &&
                roomList.map((rooms, key) => {
                  if (
                    rooms.Availablility === true &&
                    rooms.CleaningStatus === "clean"
                  ) {
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
                        <td className="py-2 text-center">
                          {rooms.CleaningStatus}
                        </td>
                        <td className="py-2 text-center">{rooms.BedType}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
