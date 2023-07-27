import React from "react";
import Sidebar from "../../components/Sidebar";

function ManageRooms() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[20vw] pt-[10vh] ">
        <div className="float-right mr-10">
          <a href="/add-room" className="border rounded bg-green-400 p-1">
            Add New Room
          </a>
        </div>
        <h2 className="my-5 text-3xl font-semibold">Rooms</h2>
        <div className="my-5 mr-10">
          <table className="w-full text-center border rounded ">
            <tr className="border">
              <th>Index</th>
              <th>Name</th>
              <th>Type</th>
              <th>Room Number</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            <tr className="border ">
              <td>1</td>
              <td>Corner Club suite</td>
              <td>Suites</td>
              <td>SU1002</td>
              <td>15,000</td>
              <td>
                <button className="border rounded bg-green-400 p-1">
                  Edit
                </button>
                <button className="border rounded bg-green-400 p-1">
                  Delete
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageRooms;
