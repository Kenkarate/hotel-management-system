import React from "react";

function Header() {
  return (
    <div className=" bg-blue-100 grid grid-cols-2 fixed w-full h-[8vh]">
      <div className="p-5">
        <p>Logo</p>
      </div>
      <div className="my-auto ">
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
      </div>
    </div>
  );
}

export default Header;
