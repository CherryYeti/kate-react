import { BsDownload } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-[#343333] bg-opacity-40 backdrop-filter backdrop-blur-sm backdrop-saturate-400">
      <ul className="list-none m-0 p-0 overflow-hidden">
        <li className="float-left">
          <div className="flex items-center text-white text-center p-4 no-underline text-2xl">
            <a href="#">
              <img
                className="mr-2 w-8 h-8 transition-all duration-300 hover:scale-110"
                src="favicon.ico"
                alt="Logo"
              />
            </a>
            <p className="hidden sm:block">Kate Javandel</p>
          </div>
        </li>
        <li className="float-right text-md ">
          <a
            className="block transition-all duration-300 text-black text-center px-4 py-5 no-underline hover:scale-110"
            href="#contact"
          >
            <button className="flex items-center bg-[#62cdfe] px-2 py-1 rounded-lg">
              <BsDownload className="mr-1" />
              <span>Download CV</span>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
