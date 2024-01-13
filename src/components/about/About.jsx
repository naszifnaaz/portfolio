import { EducationCard } from "./EducationCard";
import { WorkCard } from "./WorkCard";

import avatar from "../../assets/avatar.svg";

const experience = [
  {
    title: "Lead Instructional Associate",
    company: "Masai",
    location: "Banglore",
    role: "Full Time",
    date: "May 2022 - Present",
  },
  {
    title: "Web Development Intern",
    company: "Tisser Technologies",
    location: "Kerala",
    role: "Intern",
    date: "Mar 2021 - Apr 2021",
  },
];

const edu = [
  {
    degree: "Computer Science Engineering",
    college: "Acharya Institute of Technology",
    location: "Banglore",
    date: "June 2016 - Aug 2021",
  },
];

export const About = () => {
  return (
    <div className="font-poppins w-3/4 m-auto">
      <div>
        <h1 className="font-bold text-3xl text-purple-900 my-3">About Me</h1>
        <div className="">
          <div className="flex flex-col md:flex-row justify-around w-full">
            <div>
              <p className="text-gray-600 text-xs lg:text-lg leading-loose tracking-wide mr-10">
                My name is{" "}
                <span className="font-normal md:font-bold bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">
                  Muhammed Nasif
                </span>
                🚀 Welcome to my digital space! I'm a dedicated Full Stack Web
                Developer specializing in the MERN Stack. With a keen passion
                for leveraging technology, I craft compelling solutions that
                address diverse challenges across various industries. As a
                Computer Science enthusiast, I hold a Bachelor's degree in
                Information Science and Programming. Let's collaborate and
                transform ideas into exceptional digital experiences! 💻✨
              </p>
              <p className="mt-3 text-gray-800 text-xs lg:text-md leading-loose">
                I will love to hear from you. Whether it's a project, job
                opportunity, or just a chat. Feel free to{" "}
                <span className="font-semibold underline">contact me</span>.
              </p>
            </div>
            <img src={avatar} alt="avatar" className="w-full m-auto md:w-1/2" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-purple-900 mt-10">
            Work Experience
          </h1>
          <div>
            {experience.map((el, index) => {
              return <WorkCard work={el} key={index} />;
            })}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-purple-900 mt-10">
            Education
          </h1>
          <div>
            {edu.map((edu, index) => {
              return <EducationCard education={edu} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
