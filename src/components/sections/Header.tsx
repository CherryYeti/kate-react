const Header:React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" ml-4 mr-6">
        <h1 className="text-3xl font-bold ">Kate Javandel</h1>
        <p className="text-md ">
          ( Web Publisher / Tech Writer / Code Monkey )
        </p>
      </div>
      <div className="w-32 rounded-full overflow-hidden border-2">
        <img src="kate.png" alt="Profile" />
      </div>
    </div>
  );
};
export default Header;
