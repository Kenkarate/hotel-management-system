import React from 'react'

function Sidebar() {
  return (
    <div>
      <div className="bg-green-50 w-[15vw] h-screen fixed mt-[8vh]">
          <div className="text-sm py-5 pl-[20%]">
            <a href="/reservation">Reservations</a>
          </div>
          <div className="text-sm py-5 pl-[20%]">
            <a href="/manage-rooms">Manage Rooms</a>
          </div>
          <div className="text-sm py-5 pl-[20%]">
            <a href="">Staffs</a>
          </div>
          <div className="text-sm py-5 pl-[20%]">
            <a href="">Reports</a>
          </div>
          
        </div>
    </div>
  )
}

export default Sidebar
