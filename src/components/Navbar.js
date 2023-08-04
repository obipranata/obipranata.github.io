import { useState } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav id="home">
      <div className="flex justify-between items-center">
        <a href="">
          <h1 className="gradient-text text-4xl font-bold">obito</h1>
        </a>
        <button
          className="lg:hidden text-white"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* hamburger icon */}
          <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFFFFF">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </button>
        <div className={`flex flex-col lg:flex-row gap-16 justify-between items-center bg-[#363636] lg:bg-transparent fixed z-20 top-12 right-0 lg:static p-5 lg:p-0 rounded-lg lg:rounded-none ${isNavExpanded ? '' : ' hidden lg:flex'}`}>
          <div className="text-white absolute right-2 top-1 lg:hidden">
            <button
              className="font-semibold text-2xl"
              onClick={() => {
                setIsNavExpanded(false)
              }}
            >
              X
            </button>
          </div>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;