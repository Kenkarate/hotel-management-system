import React from "react";
import Sidebar from "../../components/Sidebar";

function NewReservation() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[15vw]  pt-[12vh] pl-5">
        <h1 className="py-5 text-4xl font-bold">Add new reservation</h1>
        <div className="border rounded p-10">
          <h3 className="text-lg font-semibold py-2">Personal info</h3>
          <div className="grid grid-cols-2 border rounded py-4 px-4">
            <p htmlFor="" className="p-2">
              Name :
              <input
                type="text"
                className="border rounded px-2"
                placeholder="Name.."
              />
            </p>
            <p htmlFor="" className="p-2">
              Mobile Number :
              <input
                type="text"
                className="border rounded px-2"
                placeholder="number..."
              />
            </p>
            <p htmlFor="" className="p-2">
              Id Proof : Dropdown
            </p>
            <input type="file" placeholder="Upload document" />
          </div>
          <h3 className="text-lg font-semibold py-2">Time/Room Info</h3>
          <div className="grid grid-cols-2 border rounded py-4 px-4">
            <p htmlFor="" className="p-2">
              Check in : Add calendar
            </p>
            <p htmlFor="" className="p-2">
              Check Out :
            </p>
            <p htmlFor="" className="p-2">
              Room type : dropdown
            </p>

            <p htmlFor="" className="p-2">
              Room Number : dropdown with search
            </p>

            <p htmlFor="" className="p-2">
              Number of Rooms : dropdown
            </p>
            <p htmlFor="" className="p-2">
              Number of pax :
              <input
                type="text"
                className="border rounded "
                placeholder="Pax..."
              />
            </p>
            <p htmlFor="" className="p-2">
              Number of Nights : dropdown
            </p>
            <p htmlFor="" className="p-2">
              Number of Adults : dropdown
            </p>
            <p htmlFor="" className="p-2">
              Number of Children : dropdown
            </p>
            <p htmlFor="" className="p-2">
              Number of Extra bed :dropdown
            </p>
            <p htmlFor="" className="p-2">
              Food Plan : dropdown
            </p>
          </div>
          <h3 className="text-lg font-semibold py-2">Rate Info</h3>
          <div className="grid grid-cols-2 border rounded py-4 px-4">
            <p htmlFor="" className="p-2">
              Net Amount :{" "}
              <input
                type="text"
                className="border rounded "
                placeholder="Amount.."
              />
            </p>
            <p htmlFor="" className="p-2">
              Total Amount :
            </p>
            <p htmlFor="" className="p-2">
              Advance Paid :
            </p>
            <p htmlFor="" className="p-2">
              Balance to be paid :
            </p>
            <p htmlFor="" className="p-2">
              Confirmed by :
            </p>
          </div>
          <button className="m-10 bg-green-400 rounded p-2 hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewReservation;
