import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinFill,
  RiWhatsappLine,
  RiInstagramFill,
} from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://github.com/azimpa"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>

      <Link href={"https://leetcode.com/u/asimpa/"} className="hover:text-accent transition-all duration-300">
        <SiLeetcode />
      </Link>

      <Link href={"https://wa.me/917025838788"} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>

      <Link href={"https://www.linkedin.com/in/asim-p-a-b08163206/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>

      <Link href={"https://www.instagram.com/___azi.m?igsh=dm9zYzN0ZHNmNGpk"} className="hover:text-accent transition-all duration-300">
        <RiInstagramFill />
      </Link>
    </div>
  );
};

export default Socials;
