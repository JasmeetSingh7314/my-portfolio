import { MdCircle } from "react-icons/md";

export default function StarterContent({
  title,
  tag,
  id,
}: {
  title: string;
  tag: string;
  id: number;
}) {
  return (
    <section className="flex">
      <div className="flex flex-col ml-5">
        <span className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-violet-400 text-left ">
          {title}
        </span>
        {id > 0 ? (
          <span className="text-lg opacity-45 ml-10 flex items-center"></span>
        ) : (
          <span className="text-xs sm:text-lg opacity-45 sm:ml-10 flex items-center">
            <MdCircle className="mr-2 w-3" />
            {tag}
          </span>
        )}
      </div>
    </section>
  );
}
