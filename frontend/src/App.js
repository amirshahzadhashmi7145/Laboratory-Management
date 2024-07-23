import './App.css';
import Home from "./pages/Home";
import Report from "./pages/Report"
import FinalReport from "./components/FinalReport";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddReportData from "./components/AddReportData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // children: [
        //     {
        //         path: "/reports",
        //         element: <Report />,
        //     },
        // ],
    },
    {
        path: "/reports",
        element: <Report />,
    },
    {
        path: "/downloadreport",
        element: <FinalReport />
    },
    {
        path: "/addreport",
        element: <AddReportData />
    }
]);


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
