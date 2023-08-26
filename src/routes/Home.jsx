import dp from "../assets/dp.png";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center font-poppins">
      <div className="font-bold text-gray-800 text-2xl md:text-5xl">
        <p className="">Hi 👋,</p>
        <p>My name is</p>
        <p>Muhammed Nasif</p>
        <p>I build things for web</p>
      </div>
      <img src={dp} alt="dp" />
    </div>
  );
};
