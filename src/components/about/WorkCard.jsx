import { GrLocation } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsFillCalendar2DateFill } from "react-icons/bs";

export const WorkCard = ({ work }) => {
  return (
    <>
      <div className="m-auto flex flex-col md:flex-row items-start justify-between md:items-center font-poppins p-3 mb-10 text-gray-600 shadow-sm">
        <div>
          <p className="text-xs lg:text-lg text-gray-700">{work.title}</p>
          <div className="flex flex-col items-start md:flex-row my-1 justify-between md:items-center">
            <div className="flex m-1">
              <HiOutlineOfficeBuilding />
              <p className="mx-1 text-xs">{work.company}</p>
            </div>

            <div className="flex m-1">
              <GrLocation />
              <p className="text-xs mx-1">{work.location}</p>
            </div>
          </div>
        </div>
        <div>
          <p className=" bg-green-300 rounded-xl text-center text-xs text-green-900 py-1 font-bold">
            {work.role}
          </p>
          <div className="flex items-center mt-3">
            <BsFillCalendar2DateFill />
            <p className="text-xs ml-3">{work.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};
