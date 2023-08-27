import { GrLocation } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsFillCalendar2DateFill } from "react-icons/bs";

export const EducationCard = ({ education }) => {
  return (
    <>
      <div className="m-auto flex flex-col md:flex-row items-start justify-between lg:items-center font-poppins p-3 mb-10 text-gray-600 shadow-sm">
        <div>
          <p className="text-xs lg:text-lg text-gray-700 ">
            {education.degree}
          </p>
          <div className="flex flex-col md:flex-row my-1 items-start justify-between md:items-center">
            <div className="flex m-1">
              <HiOutlineOfficeBuilding />
              <p className="text-xs">{education.college}</p>
            </div>

            <div className="flex m-1">
              <GrLocation />
              <p className="text-xs m-1">{education.location}</p>
            </div>
          </div>
        </div>
        <div>
          <p className=" bg-orange-300 rounded-xl text-center text-xs text-orange-900 py-1 font-bold">
            Full Time
          </p>
          <div className="flex items-center mt-3">
            <BsFillCalendar2DateFill />
            <p className="text-xs ml-3">{education.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};
