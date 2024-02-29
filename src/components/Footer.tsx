import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="Footer"
      className=" xl:px-32 medium:px-48 extra:px-60 pb-4 w-full justify-end dark:text-gray-400"
    >
      <div className="container flex flex-wrap  mt-28 sm:mb-0 sm:mt-0  xs:px-2 sm:px-16 border-top border-top-1  border-gray-500 border-opacity-20 border-md items-center justify-between  mx-auto space-y-4  sm:space-y-0">
        <div className="flex flex-row pl-5  space-x-2 sm:space-x-8">
          <p className="lg:flex md:hidden sm:hidden flex-wrap hidden items-center  text-white/[0.45] italic text-urbanist font-bold text-xl ">
            Developed with 💖 by{" "}
          </p>
          <span className="font-bold text-xl xs:text-lg  xl:-ml-4 text-white/[0.23]">
            Jasmeet Singh
          </span>
        </div>
        <ul className="flex flex-wrap pl-3 pr-4 space-x-4 sm:space-x-8">
          <li>
            <Link href="https://www.instagram.com/jasmeet_1712_/" className=" ">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href="https://twitter.com/singh_066"
              className=" "
            >
              <CiTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
