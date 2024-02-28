import { techStack } from "@/utils/tech";

export default function TechStack() {
  return (
    <section className="mb-20 mx-2 md:px-2 dark:text-gray-100">
      <div className="container max-w-xl p-2 sm:p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <h2 className="text-3xl flex justify-center  italic tracking-tighter ">
          more...
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xs:gap-x-12 sm:gap-x-24 xl:gap-x-96 gap-y-20  ">
          {techStack.map((tech, id) => (
            <svg
              key={id}
              xmlns=""
              viewBox={tech.viewBox ? tech.viewBox : " 0 0 50 50 "}
              aria-label={tech.label}
              className="  w-28   sm:h-28 mx-2 sm:mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400"
            >
              <title>{tech.label}</title>
              <path d={tech.path}></path>
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}
