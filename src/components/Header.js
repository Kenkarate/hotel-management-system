import React, { useEffect } from "react";
import { TbLogout } from "react-icons/tb";

function Header() {
  return (
    <div className=" bg-blue-100 grid grid-cols-2 fixed w-full h-[8vh]">
      <div className="p-5">
        <p className="text-xl font-bold">Hotel Management System</p>
      </div>

      <div className="my-auto flex justify-end mr-10">
        <a
          href="/dashboard"
          className="px-2 font-semibold hover:border hover:bg-black hover:text-white p-3 rounded"
        >
          Dashboard
        </a>
        <a
          href="/dashboard"
          className="px-2 font-semibold hover:border hover:bg-black hover:text-white p-3 rounded"
        >
          Something
        </a>
        <a
          href="/dashboard"
          className="px-2 font-semibold hover:border hover:bg-black hover:text-white p-3 rounded"
        >
          Calendars
        </a>
        <a
          href="/dashboard"
          className="px-2 font-semibold hover:border hover:bg-black hover:text-white p-3 rounded"
        >
          Reports
        </a>
        <div className="flex gap-2 my-auto">
          <a href="/login" onClick={() => sessionStorage.removeItem("token")}>
            Logout
          </a>
            <TbLogout />
        </div>
      </div>
    </div>
  );
}

export default Header;
