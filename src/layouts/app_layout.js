import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AppLayout() {
  return (
    <>
      <Navbar />

      <div style={{ 'minHeight': '80vh' }}>
        <Outlet />
      </div>

      <Footer />

    </>
  );
}

export default AppLayout;