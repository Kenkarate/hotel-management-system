import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import { Route } from 'react-router';

const isAuthenticated = (token) => {
    if (token) {
        return true;
    } else return false;
};

const PrivateRoute = ({ path, component: Component, ...rest }) => {
    // console.log('rest',rest)

    const authToken = sessionStorage.getItem('authToken');
    const userDetails = useSelector((state)=>state.userDetails.value)
    console.log("Step 1", userDetails);

    // sessionStorage.setItem(
    //     'name',
    //     userDetails.userDetails.name
    // );

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated(authToken||userDetails.authToken) ? (
                    window.location.pathname === path ? (
                        <Component {...props} />
                    ) : (
                        <NotFoundPage />
                    )
                ) : (
                    (console.log('redirected'),
                    (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ))
                )
            }
        />
    );
};

// const mapStateToProps = state => ({
//     userDetails: state.userDetails,
// });

export default PrivateRoute;
