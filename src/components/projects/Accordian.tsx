import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ProjectTab from "./ProjectTab";
import StarterContent from "./StarterContent";
import { projects } from "@/utils/projectsInfo";

export default function Accordian() {
  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      defaultExpandedKeys={["0"]}
      className="px-3 2xl:px-36 "
    >
      {projects.map((project, id) => (
        <AccordionItem
          key={id}
          aria-label="Accordion 1"
          className=" py-6 text-3xl  "
          startContent={
            <StarterContent title={project.title} tag={project.tag} id={id} />
          }
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <ProjectTab
            header={project.descriptionHeader}
            description={project.description}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
