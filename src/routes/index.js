import React from 'react';
import './../App.scss';


import MainDashboard from '../pages/Dashboard/MainDashboard'
import PrivateRoute from './PrivateRoutes';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/index';
import { useSelector } from 'react-redux';
import ManageAsset from '../pages/Assets/ManageAsset';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import NewReservation from '../pages/Reservations/NewReservation';
import ManageRooms from '../pages/Rooms/ManageRooms';
import AddRoom from '../pages/Rooms/AddRoom';
import ListRooms from '../pages/Rooms/ListRooms';

const Navigation = () => {
    // const authToken = getToken();

    // if (!authToken) {
    //     return <Dashboard />;
    // }
    const userDetails = useSelector((state) => state.userDetails.value);
    console.log('userDetails==', userDetails);

    const tenantUuid = useSelector(
        (state) => state.defaultcoordinates.value.tenantUUID
    );
    console.log(tenantUuid);

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>
                    {/* COMMON ROUTES */}
                    <Route exact path="/" component={Login} />
                    
                    <Route
                        exact
                        path="/createuser"
                        component={CreateUser}
                    />

                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={MainDashboard}
                    />
                    <PrivateRoute
                        exact
                        path="/reservation"
                        component={NewReservation}
                    />
                    <PrivateRoute
                        exact
                        path="/manage-rooms"
                        component={ManageRooms}
                    />
                    <PrivateRoute
                        exact
                        path="/add-room"
                        component={AddRoom}
                    />
                    <PrivateRoute
                        exact
                        path="/rooms"
                        component={ListRooms}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Navigation;
