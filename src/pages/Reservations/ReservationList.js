import React from "react";
import Sidebar from "../../components/Sidebar";

function ReservationList() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[20vw]  pt-[12vh] mr-10 ">
        <div className="float-right mr-10">
          <a href="/add-reservation" className="border rounded bg-green-400 p-2 hover:bg-green-600">
            New Reservation
          </a>
        </div>

        <h1 className="py-5 text-4xl font-bold">Reservations</h1>
      </div>
    </div>
  );
}

export default ReservationList;
