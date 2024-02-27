import { edu } from "@/utils/edu";

export default function Education() {
  return (
    <div className="w-full my-20">
      <span className=" text-4xl lg:text-7xl font-semibold tracking-wide text-violet-400 justify-start mb-10">
        Education:
      </span>
      <ul className="  list-disc ml-3 flex flex-col  ">
        {edu.map((element, index) => (
          <li
            key={index}
            className="text-3xl flex text-white justify-between my-10"
          >
            <div className="flex flex-col">
              <span className="opacity-85 text-md xl:text-2xl">
                {element.title}
              </span>
              <span className="opacity-45 text-sm xl:text-xl">
                {element.position}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" xl:ml-96 justify-center opacity-85 text-2xl">
                {" "}
                {element.grades}
              </span>
              <span className="xl:ml-96 opacity-45 text-xl">
                {element.duration}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
