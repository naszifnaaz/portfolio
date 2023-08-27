import dp from "../../assets/dp.svg";

export const Home = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-evenly items-center h-[70vh] font-poppins">
      <div>
        <div className=" text-left text-2xl font-bold text-gray-800 md:text-center md:text-5xl lg:text-left">
          <p className="font-light md:font-semibold">Hi, 👋</p>
          <p className="font-light md:font-semibold">My name is</p>
          <p className="font-normal md:font-bold bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">
            Muhammed Nasif
          </p>
          <p className="font-light md:font-semibold">I build things for web!</p>
        </div>
      </div>
      <img src={dp} alt="DP" className="w-3/4 md:w-1/3" />
    </div>
  );
};
