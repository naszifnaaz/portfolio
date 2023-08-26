import { ProjectCard } from "./ProjectCard";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";

export const Projects = () => {
  const myProjects = [
    {
      banner: bg1,
      title: "Sound Lab",
    },
    {
      banner: bg2,
      title: "Einstein",
    },
    {
      banner: bg3,
      title: "Zara",
    },
    {
      banner: bg4,
      title: "Facial Emotion Recoqnition",
    },
    {
      banner: bg5,
      title: "Flappy Bird",
    },

    {
      banner: bg6,
      title: "Sudoku Solver",
    },
  ];
  return (
    <div className=" flex-col justify-center items-center">
      <div className="text-center">
        <p className="font-bold text-4xl text-purple-950 my-2">My Projects</p>
        <p className="text-xl text-gray-600">Things I've built recently</p>
      </div>
      <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center md:m-20 ">
        {myProjects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};
