import logo from "../../assets/logo-white.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="px-3">
      <div className="flex flex-col md:flex-row justify-evenly items-center text-xs text-gray-800">
        <img src={logo} className="w-32" />
        <p>
          <a href="https://mailto:naszifnaaz@gmail.com" target="_blank">
            naszifnaaz@gmail.com
          </a>
        </p>

        <p>+91 8075436081</p>
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
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row justify-around items-center text-gray-700">
        <div className="flex text-xs items-center">
          <p className="mr-3">Home</p>
          <p className="mr-3">About</p>
          <p className="mr-3">TechStack</p>
          <p className="mr-3">Projects</p>
          <p className="mr-3">Contact</p>
        </div>
        <p className="mt-3 mb-10 text-sm">
          Designed and built by{" "}
          <span className="underline bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-bold">
            <a href="#">Nasif</a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};
