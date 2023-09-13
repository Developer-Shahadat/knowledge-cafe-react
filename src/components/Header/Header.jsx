import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2  max-w-7xl mx-auto">
      <h1 className="text-center text-3xl bg-red-300 font-bold">
        React Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
