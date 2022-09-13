import menu from "../assets/icons/more.png";
import kids from "../assets/images/asset 126.svg";
import search from "../assets/images/asset 127.svg";

const Navbar = () => {
  return (
    <nav className="px-16 items-center justify-between flex py-6">
      {/* LeftNav */}
      <div className="flex">
        {/* Menu */}
        <div>
          <img className="w-4 mt-1" src={menu} alt="" />
        </div>
        {/* Logo */}
        <div className="logoContainer">
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            className="w-[135px] ml-5 -mt-3"
            alt=""
          />
        </div>
        {/* Navlinks */}
        <div className="navLink ml-4 text-lg">
          <ul className="text-gray-300 gap-8 flex">
            <li className="hover:text-white cursor-pointer">TV</li>
            <li className="hover:text-white cursor-pointer">Movies</li>
            <li className="hover:text-white cursor-pointer">Sports</li>
            <li className="hover:text-white cursor-pointer">Disney+</li>
            <li>
              <img className="mt-[6px]" src={kids} alt="" />
            </li>
          </ul>
        </div>
      </div>

      {/* Right Nav */}
      <div className="flex items-center gap-5">
        {/* Search Box */}
        <div className="flex relative items-center">
          <input
            className="border-b bg-hotstarBlue py-1 w-60 focus:w-96 transition-all duration-100 focus:border-hotstarCyan ease-in-out outline-none text-gray-200 border-gray-400"
            placeholder="Search"
            type="text"
          />
          <div>
            <img className="w-4 top-2 right-0 absolute" src={search} alt="" />
          </div>
        </div>

        {/* Subscribe Button */}
        <button className="bg-hotstarCyan uppercase font-semibold text-[12px] rounded px-3 py-[2px] text-white ">
          Subscribe
        </button>

        {/* Login Button */}
        <button className="text-white text-lg">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
