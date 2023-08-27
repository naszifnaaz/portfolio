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
      desc: "Proficiently developed a fictitious e-commerce website using React, Tailwind CSS, Express, and MongoDB, including an admin dashboard and simulated Stripe payment integration. Demonstrates expertise in front-end and back-end technologies, enhancing my web development skills for real-world projects.",
      techstack: ["react", "redux", "express", "mongodb"],
      preview_link: "https://sound-lab.vercel.app/",
      repo_link: "https://github.com/naszifnaaz/sound-lab",
      executable: false,
      papers: false,
    },
    {
      banner: bg2,
      title: "Einstein",
      desc: "Designed and simulated an AI-powered SaaS platform using Next.js and Tailwind CSS, seamlessly integrating OpenAI capabilities. Implemented Stripe payment integration for monetization. Demonstrated proficiency in AI, encompassing image, video, text, sound, and code generation, enhancing my expertise in cutting-edge tech for future projects.",
      techstack: ["nextjs", "tailwind", "OpenAI"],
      preview_link: "",
      repo_link: "https://github.com/naszifnaaz/einstein",
      executable: true,
      papers: false,
    },
    {
      banner: bg3,
      title: "Zara",
      desc: "Crafted a responsive e-commerce platform from scratch, utilizing HTML, CSS, and JavaScript. Engineered user-friendly features such as dynamic filtering, sorting, pagination, and robust search capabilities. Implemented a seamless cart system and secure payment processing, showcasing my skills in web development and user-focused design",
      techstack: ["html", "css", "js"],
      preview_link: "https://zara-eight.vercel.app/",
      repo_link: "https://github.com/naszifnaaz/zara",
      executable: false,
      papers: false,
    },
    {
      banner: bg4,
      title: "Facial Emotion Recoqnition",
      desc: "FER (Facial Emotion Recognition) is an innovative project harnessing the power of Machine Learning and Computer Vision to analyze users' emotions in real-time via camera input. By accurately detecting and categorizing emotions, FER promises to enhance human-computer interaction and applications, demonstrating the potential of AI technology.",
      techstack: ["python", "ml"],
      preview_link: "",
      repo_link: "https://github.com/naszifnaaz/facial-emotion-recognition",
      executable: true,
      papers: true,
    },
    {
      banner: bg5,
      title: "Flappy Bird",
      desc: "Recreated the classic sensation of Flappy Bird with my personalized touch. Developed using Python's pygame module, the project features basic sprite animations to bring the legendary 2013 game to life. A nostalgic homage to the viral sensation, showcasing my programming and game development skills.",
      techstack: ["python"],
      preview_link: "",
      repo_link: "https://github.com/naszifnaaz/flappy-bird",
      executable: true,
      papers: true,
    },

    {
      banner: bg6,
      title: "Sudoku Solver",
      desc: "Experience the timeless challenge of Sudoku with my Python creation! Developed with pygame, this Sudoku game employs the efficient backtracking algorithm to offer hours of brain-teasing fun. Sharpen your logic and problem-solving skills with this classic number-placement puzzle made with Python Pygame",
      techstack: ["python"],
      preview_link: "",
      repo_link: "https://github.com/naszifnaaz/sudoku-solver",
      executable: true,
      papers: false,
    },
  ];
  return (
    <div className=" flex-col justify-center items-center font-poppins">
      <div className="text-center">
        <p className="font-bold text-4xl text-purple-950 my-2">My Projects</p>
        <p className="text-xl text-gray-600">Things I've built recently</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center mx-7 md:mx-14 mt-8 mb-20 ">
        {myProjects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};
