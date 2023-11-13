import ZittoLogo from "../../assets/zitto.png";
import Links from "./Links";
import Profile from "./Profile";

const NavBar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-[1440px]  py-5 flex px-6 items-center justify-between gap-4 ">
        <div>
          <img src={ZittoLogo} alt="Zitto Logo" width={129} height="auto" />
        </div>
        <Links />
        <Profile />
      </div>
    </nav>
  );
};

export default NavBar;
