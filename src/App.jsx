import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import SidebarMenu from "./components/SidebarMenu";
import HomePage from "./pages/HomePage";
import ProfilePages from "./pages/ProfilePages";
import SettingsPages from "./pages/SettingsPages";
import ChangePasswordPages from "./pages/ChangePasswordPages";
import { asyncPreloadProsess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";

function App() {
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser || null);
  const isPreload = useSelector((state) => state.isPreload || false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProsess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate("/");
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="container-fluid">
        <div className="row">
          <SidebarMenu signOut={onSignOut} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<ProfilePages />} />
            <Route path="/settings" element={<SettingsPages />} />
            <Route path="/changePassword" element={<ChangePasswordPages />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
