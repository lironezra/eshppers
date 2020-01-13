import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
    }) => (
    <Route
        {...rest}
        render={props => {
            if (isVerifying) {
                return <div />
            } else {
                if (isAuthenticated) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                        />
                    )
                }
                // else {
                //     if (props.location.pathname === '/cart') {                       
                //         return (
                //             <Redirect
                //             to={{
                //                 pathname: "/error",
                //                 state: { from: props.location }
                //             }}
                //             />
                //         )
                //     } else {
                //         return (
                //             <Redirect
                //             to={{
                //                 pathname: "/signin",
                //                 state: { from: props.location }
                //             }}
                //             />
                //         )
                //     }
                // }
            }
        }
            // isVerifying ? (
            //     <div />
            // ) : isAuthenticated ? (
            //     <Component {...props} />
            // ) : (
            //     <Redirect
            //     to={{
            //         pathname: "/signin",
            //         state: { from: props.location }
            //     }}
            //     />
            // )
        }
    />
);

export default ProtectedRoute;