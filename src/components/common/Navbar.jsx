import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/logo-white.png";
export const Navbar = () => {
  return (
    <div className="flex justify-around items-center my-5">
      <div>
        <img src={logo} alt="logo" className="w-32" />
      </div>

      <nav className="hidden lg:flex text-sm">
        <p className="mr-3">Home</p>
        <p className="mr-3">About</p>
        <p className="mr-3">TechStack</p>
        <p className="mr-3">Projects</p>
        <p className="mr-3">Contact</p>
      </nav>
      <div className="flex">
        <a href="https://github.com/naszifnaaz" target="_blank">
          <AiFillGithub size={"2rem"} className="mr-3" />
        </a>
        <a href="https://www.linkedin.com/in/nasifnaaz/" target="_blank">
          <AiFillLinkedin size={"2rem"} className="mr-3" />
        </a>
        <a href="https://twitter.com/naszifnaaz" target="_blank">
          <AiOutlineTwitter size={"2rem"} className="mr-3" />
        </a>

        {/* <GiHamburgerMenu size={"2rem"} className="lg:hidden mr-3" /> */}
      </div>
    </div>
  );
};
