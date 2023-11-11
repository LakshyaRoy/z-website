import ZittoLogo from "../assets/zitto.png";
import Links from "./NavComponents/Links";
import Profile from "./NavComponents/Profile";

const NavBar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-20 relative z-30 py-5 flex items-center justify-between">
        <div>
          <img src={ZittoLogo} alt="Zitto Logo" />
        </div>
        <Links />
        <Profile />
      </div>
    </nav>
  );
};

export default NavBar;
