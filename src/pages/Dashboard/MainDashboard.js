import React from "react";
import Sidebar from "../../components/Sidebar";

function MainDashboard() {
  return (
    <div>
      <div className=" bg-red-50 flex ">
        <Sidebar />
        <div className=" ml-[15vw] grid grid-cols-4 mt-[8vh]">
          <div className="bg-green-300 rounded p-5 m-5">
            Total Rooms : 50
          </div>
          <div className="bg-green-300 rounded p-5 m-5">
            Reservations : 50
          </div>
          <div className="bg-green-300 rounded p-5 m-5">
            Staffs : 50
          </div>
          <div className="bg-green-300 rounded p-5 m-5">
            Booked Rooms : 50
          </div>
          <div className="bg-green-300 rounded p-5 m-5">
            Available Rooms : 50
          </div>
          <div className="bg-green-300 rounded p-5 m-5">
            Checked In : 50
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
