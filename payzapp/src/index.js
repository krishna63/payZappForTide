import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TapToPay from './TapToPay';
import ScanToPay from './ScanToPay';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Authenticate from './Authenticate';
import TransactionSucess from './TransactionSucesses';
import Reports from './Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "tapToPay",
        element: <TapToPay />,
      },
      {
        path: "/scanToPay",
        element: <ScanToPay/>,
      },
      {
        path: "/auth",
        element: <Authenticate/>
      },
      {
        path: "/success",
        element: <TransactionSucess/>
      },
      {
        path: "/reports",
        element: <Reports />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
