import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Socials:React.FC = () => {
  return (
    <>
      <div className="mt-2 origin-top-left transition-all duration-300 hover:scale-105 hover:text-[#62cdfe]">
        <a
          href="https://linkedin.com/in/katejavandel"
          className="flex items-center text-xl "
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="mr-2" />
          <p>@katejavandel</p>
        </a>
      </div>
      <div className="mt-2 origin-top-left transition-all duration-300 hover:scale-105 hover:text-[#62cdfe]">
        <a
          href="mailto:kjavandel@yahoo.com"
          className="flex items-center text-xl "
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="mr-2" />
          <p>kjavandel@yahoo.com</p>
        </a>
      </div>
    </>
  );
};
export default Socials;
