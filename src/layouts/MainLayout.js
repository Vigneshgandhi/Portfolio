import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;