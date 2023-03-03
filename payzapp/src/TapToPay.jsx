import React from "react";
import AppContext from "./AppContext";
function TapToPay() {
    const appData = React.useContext(AppContext);
    return (
        <p>tap to pay</p>
    )
}

export default TapToPay;
