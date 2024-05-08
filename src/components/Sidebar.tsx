import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";

const Sidebar = () => {
  return (
    <nav className="w-full md:max-w-[300px] bg-gray-700 md:h-screen font-bold text-2xl md:p-[20px] py-[10px] px-[15px] text-[#F49F1C]">
      <div className="gap-y-5 flex md:block items-center justify-between">
        <div className="md:border-b mt-9 md:mt-0 border-[#F49F1C] pb-7 mb-7">
          <Link
            to="/"
            className="flex items-center text-[#F49F1C] md:text-3xl md:mb-[20px]"
          >
            <IoMdContacts  className="mr-2" />
            <h1 className="mb-[5px] text-xl md:text-3xl">Contacts App</h1>
          </Link>
        </div>

        <ul className="md:block flex items-center">
          <li>
            <Link to="/" className="py-[20px] flex items-center hover:text-[#6c5635]">
              <AiOutlineHome className="mx-2" />
              <h1 className="hidden text-lg md:text-xl md:flex">Home</h1>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="flex items-center hover:text-[#6c5635]">
              <BsGraphUpArrow className="mx-2" />
              <h1 className="hidden text-lg md:text-xl md:flex">Charts and Maps</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
