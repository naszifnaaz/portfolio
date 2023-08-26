import logo from "../../assets/logo-white.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="p-3">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <img src={logo} className="w-32" />
        <p>naszifnaaz@gmail.com</p>
        <p>+91 8075436081</p>
        <div className="flex">
          <AiFillGithub size={"2rem"} className="mr-2" />
          <AiFillLinkedin size={"2rem"} className="mr-2" />
          <AiOutlineTwitter size={"2rem"} className="mr-2" />
        </div>
      </div>
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row justify-around items-center text-gray-700">
        <div className="flex text-sm items-center">
          <p className="mr-3">Home</p>
          <p className="mr-3">About</p>
          <p className="mr-3">TechStack</p>
          <p className="mr-3">Projects</p>
          <p className="mr-3">Contact</p>
        </div>
        <p className="mt-3 mb-10 text-sm">
          Designed and built by{" "}
          <span className="underline bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-bold">
            Nasif
          </span>
          .
        </p>
      </div>
    </div>
  );
};
