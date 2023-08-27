import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiJavascript,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
export const ProjectCard = ({ project }) => {
  return (
    <div className="shadow-xl font-poppins rounded-lg">
      <img src={project.banner} className="w-full" />
      <p className=" text-xl text-center my-3 h-12 underline font-semibold">
        {project.title}
      </p>
      <p className="text-sm px-3 leading-relaxed text-gray-700 tracking-wide">
        {project.desc}
      </p>
      <div className="flex my-4 px-3">
        {project.techstack.includes("react") ? (
          <FaReact size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("redux") ? (
          <SiRedux size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("express") ? (
          <SiExpress size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("mongodb") ? (
          <SiMongodb size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("python") ? (
          <SiPython size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("html") ? (
          <AiFillHtml5 size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("css") ? (
          <FaCss3Alt size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("js") ? (
          <SiJavascript size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("OpenAI") ? (
          <SiOpenai size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("tailwind") ? (
          <SiTailwindcss size={"2rem"} className="mr-3" />
        ) : null}
        {project.techstack.includes("nextjs") ? (
          <TbBrandNextjs size={"2rem"} className="mr-3" />
        ) : null}
      </div>
      <div className="flex justify-evenly items-center my-3">
        {project.executable ? null : (
          <div className="flex justify-center items-center">
            <BiLinkAlt size={"2rem"} className="mr-2" />
            <a href={`#`} target="_blank">
              <p className="underline font-bold">
                <a href={project.preview_link} target="_blank">
                  Live Preview
                </a>
              </p>
            </a>
          </div>
        )}

        <div className="flex justify-center items-center">
          <AiFillGithub size={"2rem"} className="mr-2" />
          <p className="underline font-bold">
            <a href={project.repo_link} target="_blank">
              View Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
