import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DefaultLayout = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};
