import { Button, Image } from "@nextui-org/react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
type tabProps = {
  header: string;
  description: string;
  imgSrc: string;
  link: string;
};
export default function ProjectTab({
  header,
  description,
  imgSrc,
  link,
}: tabProps) {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            {header}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-base md:text-lg lg:text-xl dark:text-gray-400">
            {description}
          </p>
          <Button
            variant="shadow"
            className="inline-flex   items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-violet-400 bg-opacity-20 "
          >
            <Link
              href={`${link}`}
              className="flex   justify-between items-center"
            >
              Checkout
              <FaLocationArrow className="ml-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-2 sm:flex sm:mt-8 sm:flex-col lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            isBlurred
            className="backdrop-blur-md backdrop-opacity-35"
            alt="mockup"
            src={imgSrc}
          />
        </div>
      </div>
    </section>
  );
}
