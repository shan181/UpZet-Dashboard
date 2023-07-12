import { Route, Routes } from "react-router-dom";
import Email from "./Dashboard/components/email";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import Dashboard from "./Dashboard";
import Calander from "./Dashboard/components/Calander";
import Authentication from "./Dashboard/components/authentication";
import Utility from "./Dashboard/components/utility";
import Elements from "./Dashboard/components/uiElements";
import Forms from "./Dashboard/components/forms";
import Tables from "./Dashboard/components/tables";
import Charts from "./Dashboard/components/charts";
import Icons from "./Dashboard/components/icons";

function AppRoutes() {
  return (
    <Routes>
      <Route key="4" exact path="/Login" element={<Login />} />
      <Route key="5" exact path="/Signup" element={<Signup />} />
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="/calander" element={<Calander />} />
        <Route path="/email" element={<Email />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/icons" element={<Icons />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
