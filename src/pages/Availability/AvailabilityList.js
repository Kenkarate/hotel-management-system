import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Datepicker from "react-tailwindcss-datepicker";
function AvailabilityList() {
  // Calendar
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  // Calendar end
  return (
    <div>
      <Sidebar />
      <div className=" ml-[20vw] pt-[12vh] mr-10">
        <div>
          <Datepicker
            primaryColor={"yellow"}
            asSingle={true}
            useRange={false}
            placeholder={"Select a Date..."}
            displayFormat={"DD/MM/YYYY"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
        <div className="bg-gray-300 my-10">
            <div className=" bg-red-500 w-10 h-10">

            </div>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityList;
