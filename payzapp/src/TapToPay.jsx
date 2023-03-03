import React from "react";
import AppContext from "./AppContext";

function TapToPay() {
    const value = React.useContext(AppContext);
    console.log(value)
    return(<p>tap to pay</p>)
}

export default TapToPay;
