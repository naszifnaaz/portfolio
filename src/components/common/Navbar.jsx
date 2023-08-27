import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/logo-white.png";
import { useRef } from "react";
export const Navbar = () => {
  const ref = useRef(null);
  function handleScroll() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex justify-around items-center mb-5 pt-5">
      <div>
        <img src={logo} alt="logo" className="w-32" />
      </div>

      <nav className="hidden lg:flex text-sm">
        <button onClick={handleScroll}>
          <p className="mr-3">Home</p>
        </button>
        <button onClick={handleScroll}>
          <p className="mr-3">About</p>
        </button>
        <button>
          <p className="mr-3">TechStack</p>
        </button>
        <button>
          <p className="mr-3">Projects</p>
        </button>
        <button>
          <p className="mr-3">Contact</p>
        </button>
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
