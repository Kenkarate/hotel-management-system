import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import Title from "antd/es/typography/Title";
import { Button, Card, DatePicker } from "antd";
import { FiArrowDown, FiArrowUp, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";
import { getRooms } from "../../redux/RoomSlice";


function MainDashboard() {
  const [roomList, setRoomList] = useState("");
  const dispatch = useDispatch();
  const RoomCollection = collection(db, "rooms");
  const email = useSelector((state) => state.user.value);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  // get all rooms
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const data = await getDocs(RoomCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRoomList(filteredData);
        dispatch(getRooms(filteredData));
        // roomList.map((item)=>console.log(item.Price))
      } catch (err) {
        console.log(err);
      }
    };
    handleSubmit();
  }, []);

  console.log("running");
  return (
    <div className="col-span-5 ">
      {/* <ResponsiveSidebar /> */}

      <div className="p-10 ">
        <div className="h-[10vh]">
          <div className="flex justify-between ">
            <Title className="my-auto" level={2}>
              Dashboard
            </Title>

            <div className="my-auto">Resort</div>
            <div className="my-auto">
              <p>
                Good Morning! <span className="capitalize">{email.email} </span>{" "}
                |
              </p>
            </div>
            <div className="my-auto">
              <Link to={"/add-reservation"}>
                <Button className="flex gap-2 my-auto">
                  <FiEdit className="my-1" /> New Reservation{" "}
                </Button>
              </Link>
            </div>
            <div></div>
            <div className="my-auto">
              <div class="">
                <div class="dropdown inline-block relative">
                  <button class="  py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Account</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 min-w-32">
                    <li class="">
                      <a
                        class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/"
                      >
                        Profile
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/"
                      >
                        Logout
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="/"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-2 font-light text-sm pb-10">
          <div className="bg-gray-200 rounded-lg p-5">
            <p className="text-xl py-2 pt-4">Reservation</p>
            <div className="grid grid-cols-3 gap-10">
              <div className="flex ">
                <HiHome className=" w-8 h-8" />
                <div>
                  <p>In Home</p>
                  <Title level={5}>20</Title>
                </div>
              </div>
              <div className="flex ">
                <FiArrowDown className=" w-8 h-8" />
                <div>
                  <p>Arrival</p>
                  <Title level={5}>14</Title>
                </div>
              </div>
              <div className="flex ">
                <FiArrowUp className=" w-8 h-8" />
                <div>
                  <p>Departure</p>
                  <Title level={5}>27</Title>
                </div>
              </div>
            </div>
            <p className="text-xl py-2 pt-4">House Keeping</p>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex ">
                <MdCleaningServices className=" w-8 h-8" />
                <div>
                  <p>Cleaning</p>
                  <Title level={5}>12</Title>
                </div>
              </div>
              <div className="flex ">
                <TbVacuumCleaner className=" w-8 h-8" />
                <div>
                  <p>Vacant</p>
                  <Title level={5}>14</Title>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-5">
            <p className="text-xl">Occupancy</p>
            <div className="grid grid-cols-3">
              <div>
                <p>Vacant</p>
                <p>49</p>
              </div>
              <div>
                <p>Occupied</p>
                <p>49</p>
              </div>
              <div>
                <p>Not Ready</p>
                <p>49</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* setion two  */}
        {/* <div className="grid grid-cols-3 gap-5 py-5 font-light ">
          <div className="border rounded-lg p-5">
            <p className="text-xl">New Customer</p>
            <div>
              <table className="w-full text-center">
                <thead>
                  <th>Name</th>
                  <th>Room No</th>
                  <th>Date</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                  </tr>
                  <tr>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                  </tr>
                  <tr>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                    <td>Ajesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border bg-gray-100 rounded-lg p-5 h-[40vh] overflow-scroll">
            <p className="text-xl">Recent Activities</p>
            <div className="flex justify-between">
              <div className="">
                <p>Room #1430</p>
                <p>Zain ahmad requested for a coffee</p>
              </div>
              <p className="">1min</p>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p>Room #1430</p>
                <p>Zain ahmad requested for a coffee</p>
              </div>
              <p className="">1min</p>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p>Room #1430</p>
                <p>Zain ahmad requested for a coffee</p>
              </div>
              <p className="">1min</p>
            </div>
          </div>
        </div> */}
        {/* setion two end */}

        {/* section  */}
        <div className=" grid lg:grid-cols-6 gap-5  mr-10">
          <div className="bg-green-300 rounded p-2 ">
            Total Rooms : {roomList.length}
          </div>
          <div className="bg-orange-300 rounded p-2 ">Reservations : 50</div>
          <div className="bg-blue-300 rounded p-2 ">Staffs : 50</div>
          <div className="bg-gray-300 rounded p-2 ">Booked Rooms : 50</div>
          <div className="bg-lime-300 rounded p-2 ">Available Rooms : 50</div>
          <div className="bg-slate-300 rounded p-2 ">Checked In : 50</div>
        </div>
        <div className="pt-20">
          <Card title="Quick Links">
            <Card.Grid style={gridStyle}>New Reservation</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              Check IN
            </Card.Grid>
            <Card.Grid style={gridStyle}>Check Out</Card.Grid>
            <Card.Grid style={gridStyle}>Reservations</Card.Grid>
            <Card.Grid style={gridStyle}>Calendar</Card.Grid>
            <Card.Grid style={gridStyle}>Reports</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>
        {/* <div>
          <div className="grid grid-cols-3 gap-5 my-10  pt-[12vh] mr-10 ">
            <div className="bg-gray-400 p-10 h-[100%] rounded-lg">
              <p className="">Booking</p>
              <p className="">Create Room Booking</p>
            </div>
            <div className="bg-gray-400 p-10 h-[100%] rounded-lg">
              <p className="">Check In</p>
              <p className="">Check In Room</p>
            </div>
            <div className="bg-gray-400 p-10 h-[100%] rounded-lg">
              <p className="">Check Out</p>
              <p className="">Check Out Room</p>
            </div>
            <div className="bg-gray-400 p-10 h-[100%] rounded-lg">
              <p className="">Room Food</p>
              <p className=""> Create New Orders</p>
            </div>
          </div>
        </div> */}
        {/* <div className="my-10  ml-[20vw] pt-[12vh] mr-10">
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
        </div> */}
      </div>
    </div>
  );
}

export default MainDashboard;
