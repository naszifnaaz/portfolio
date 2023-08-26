import dp from "../../assets/dp.svg";

export const Home = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-evenly items-center h-[70vh] font-poppins">
      <div>
        <div className="text-2xl font-bold text-gray-800 text-center md:text-4xl lg:text-left">
          <p>Hi, 👋</p>
          <p>My name is</p>
          <p className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">
            Muhammed Nasif
          </p>
          <p>I build things for web!</p>
        </div>
      </div>
      <img src={dp} alt="DP" className="w-1/2 md:w-1/3" />
    </div>
  );
};
