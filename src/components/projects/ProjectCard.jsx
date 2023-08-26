import { FaReact } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

export const ProjectCard = ({ project }) => {
  return (
    <div className="shadow-xl font-poppins rounded-lg">
      <img src={project.banner} className="w-full" />
      <p className=" text-xl text-center my-3">{project.title}</p>
      <p className="text-sm px-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
        perspiciatis ipsum impedit sunt ut reiciendis hic animi ipsa consectetur
        ducimus in quo vel velit cumque aut cupiditate necessitatibus molestiae
        porro, provident dolore iste est a quaerat. Est nemo repellat quam?
      </p>
      <div className="flex my-4 px-3">
        <FaReact size={"2rem"} className="mr-3" />
        <SiRedux size={"2rem"} className="mr-3" />
        <SiExpress size={"2rem"} className="mr-3" />
        <SiMongodb size={"2rem"} className="mr-3" />
      </div>
      <div className="flex justify-evenly items-center my-3">
        <div className="flex justify-center items-center">
          <BiLinkAlt size={"2rem"} className="mr-2" />
          <p className="underline font-bold">Live Preview</p>
        </div>
        <div className="flex justify-center items-center">
          <AiFillGithub size={"2rem"} className="mr-2" />
          <p className="underline font-bold">View Code</p>
        </div>
      </div>
    </div>
  );
};
