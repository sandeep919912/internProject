import React from "react";
import AboutTabs from "./AboutTabs";
import Gallery from "./Gallery";

const Layout = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-8 py-10">
      {/* Left Side (Empty for layout balance) */}
      <div className="flex-1 hidden lg:block"></div>

      {/* Right Side */}
      <div className="flex flex-col gap-6 w-full lg:w-[580px] ">
        <AboutTabs />
        <Gallery />
      </div>
    </div>
  );
};

export default Layout;
