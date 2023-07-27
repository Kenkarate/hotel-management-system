import React from "react";
import Sidebar from "../../components/Sidebar";

function AddRoom() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[20vw] pt-[12vh]">
        {" "}
        <h2 className="my-5 text-3xl font-semibold">Rooms</h2>
        <div className="border mr-10 rounded grid grid-cols-3 p-5">
          <div className="py-5">
            <label htmlFor="" className="">
              Name :{" "}
            </label>
            <input type="text" name="" id="" className="border rounded px-2" />
          </div>
          <div className="py-5">
            <label htmlFor="" className="">
              Type :{" "}
            </label>
            <select>
              <option>Suite</option>
              <option>Premium</option>
              <option>Economy</option>
              <option>Double</option>
            </select>
          </div>
          <div className="py-5">
            <label htmlFor="" className="">
              Room Number :{" "}
            </label>
            <input type="text" name="" id="" className="border rounded px-2" />{" "}
          </div>
          <div className="py-5">
            <label htmlFor="" className="">
              Price :{" "}
            </label>
            <input type="text" name="" id="" className="border rounded px-2" />{" "}
          </div>
        </div>
        <div className="mt-10 border rounded p-5 mr-10">
            Images:<input type="file"/>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
