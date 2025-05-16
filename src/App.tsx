import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Careers from "./pages/careers";
import Accomodation from "./pages/accomodation";
import AboutUs from "./pages/aboutUs";
import PrivateRoom from "./pages/privateRoom";
import RoomDetails from "./components/services/accomodationFacilities/roomDetails";
import AdminLoginForm from "./components/adminSection/adminLogin";
import { ROUTES } from "./components/constants/routes";
import DefaultLayout from "./layout/defaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes WITH navbar/footer */}
        <Route element={<DefaultLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTES.WHAT_WE_OFFER} element={<Services />} />
          <Route path={ROUTES.PRIVATE_ROOM} element={<PrivateRoom />} />
          <Route path={ROUTES.ROOM_DETAILS} element={<RoomDetails />} />
          <Route path={`${ROUTES.WHAT_WE_OFFER}/:serviceType`} element={<Services />} />
          <Route path={ROUTES.ACCOMODATION} element={<Accomodation />} />
          <Route path={ROUTES.CAREERS} element={<Careers />} />
          <Route path={`${ROUTES.CAREERS}/:careerType`} element={<Careers />} />
        </Route>

        {/* Routes WITHOUT navbar/footer */}
        <Route path={ROUTES.ADMINFORM} element={<AdminLoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
