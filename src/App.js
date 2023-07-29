import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import MainDashboard from "./pages/Dashboard/MainDashboard";
import Header from "./components/Header";
import NewReservation from "./pages/Reservations/NewReservation";

import AddRoom from "./pages/Rooms/AddRoom";
import ListRooms from "./pages/Rooms/ListRooms";
function App() {
  const authToken = sessionStorage.getItem("token");

  if (!authToken) {
    return <Login />;
  }

  return (
    <div className="wrapper">
      <Header />
      <Router>
        <Routes>
          {/* COMMON ROUTES */}
          <Route exact path="/" element={<Login />} />

          <Route exact path="/createuser" element={<CreateUser />} />

          <Route exact path="/dashboard" element={<MainDashboard />} />
          <Route exact path="/reservation" element={<NewReservation />} />

          <Route exact path="/add-room" element={<AddRoom />} />
          <Route exact path="/rooms" element={<ListRooms />} />
          {/* RESET PASSWORD ROUTES */}
          {/* <Route
                        exact
                        path="/resetpassword"
                        element={<ResetPassword />}
                    />
                    <Route
                        exact
                        path="/password-reset/checkemail"
                        element={<CheckEmail />}
                    />
                    <Route
                        exact
                        path="/password-reset/setpassword"
                        element={<SetPassword />}
                    />
                    <Route
                        exact
                        path="/password-reset/resetsuccess"
                        element={<ResetSuccess />}
                    /> */}

          {/* DASHBOARD */}
          {/* <Route exact path="/dashboard" element={<Dashboard />} />


                    <Route
                        exact
                        path="/pages/assetOverview"
                        element={<AssetOverview />}
                    />
                    <Route
                        exact
                        path="/assetoverview"
                        element={<AssetOverview />}
                    />

                    <Route exact path="/pages/devices" element={<Devices />} />
                    <Route
                        exact
                        path="/pages/manage/venue"
                        element={<ManageVenue />}
                    />
                    <Route
                        exact
                        path="/pages/manage/building"
                        element={<ManageBuilding />}
                    /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
