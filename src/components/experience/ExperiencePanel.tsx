import { edu, exp } from "@/utils/edu";

export default function Experience() {
  return (
    <section className=" sm:w-3/4 md:w-5/6 lg:w-full  sm:px-0 md:px-4 lg:px-0 flex flex-col">
      <div className="mb-20">
        <span className="  sm:text-5xl md:text-5xl xl:text-7xl font-semibold tracking-wide text-violet-400 justify-start mb-20">
          Experience:
        </span>
        <ul className="list-disc ml-12">
          {exp.map((element, index) => (
            <li
              key={index}
              className="text-3xl flex text-white justify-between my-10"
            >
              <div className="flex flex-col">
                <span className="opacity-85 text-2xl">{element.type}</span>
                <span className="opacity-45 text-xl">{element.position}</span>
              </div>
              <div className="flex flex-col">
                <span className="ml-96 justify-center opacity-85 text-2xl">
                  {" "}
                  {element.location}
                </span>
                <span className="ml-96 opacity-45 text-xl">
                  {element.duration}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-7xl font-semibold tracking-wide text-violet-400 justify-start mb-10">
          Education:
        </span>
        <ul className=" w-full list-disc ml-12 flex flex-col  ">
          {edu.map((element, index) => (
            <li
              key={index}
              className="text-3xl flex text-white justify-between my-10"
            >
              <div className="flex flex-col">
                <span className="opacity-85 text-2xl">{element.title}</span>
                <span className="opacity-45 text-xl">{element.position}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="ml-96 justify-center opacity-85 text-2xl">
                  {" "}
                  {element.grades}
                </span>
                <span className="ml-96 opacity-45 text-xl">
                  {element.duration}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
